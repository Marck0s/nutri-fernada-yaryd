import type { NextConfig } from "next";

/**
 * DEPLOY / SECURITY NOTE — READ BEFORE REFACTORING THIS FILE.
 *
 * 1) This config MUST stay a plain exported OBJECT (see `export default
 *    nextConfig` at the bottom). Hostinger's Node.js shared hosting injects a
 *    generated config that *imports* this file and merges our settings with
 *    `output: "standalone"`. Hostinger's docs, verbatim:
 *
 *      "Export a config object, not a function. `export default { ... }` and
 *       `module.exports = { ... }` are merged correctly. A function config
 *       (`export default (phase) => ({...})`) is not — your settings and the
 *       standalone output are both lost, and the deployment fails."
 *
 *    Converting this to a function config would SILENTLY DROP the security
 *    headers and the restricted `images.remotePatterns` below, AND break the
 *    production deploy. There is no test that will catch this for you.
 *
 * 2) Do NOT add `output: "standalone"` here — Hostinger injects it, and
 *    adding it ourselves is not what keeps the deploy working.
 */

/**
 * The only six remote images on the site: the testimonial avatars in
 * `src/components/Testimonials.tsx` (lines 14, 21, 34, 47, 54, 61).
 *
 * WHY THIS IS A PATTERN ALLOWLIST AND NOT A HOST ALLOWLIST:
 * `/_next/image?url=` will happily proxy any URL the config permits, so a
 * host-only rule (the previous config) leaves the open-redirect-to-AVIF
 * exploit path wide open — the Image Optimization API RCEs
 * (GHSA-2xp9-vwfh-vxw4, GHSA-p293-qw3h-jr36). Pinning the exact paths means
 * the optimizer refuses everything else with a 400.
 */
const ALLOWED_AVATAR_PATHS = [
  "/a-/ALV-UjULwCdUfVFlQsN9m836kOtbtk3z-tM733FijlWfVcqVCbLNQr1A=s64-c-rp-mo-br100",
  "/a-/ALV-UjUluOxhlNKdsj7zM4Ros1PJRqIgTq21mYyiwq6jvZiUZP1dDNTH=s64-c-rp-mo-br100",
  "/a-/ALV-UjVlXT3OD5iv45ZjfxVwkoaDlBDpP7_66fBF7xEh07k2gQmaknJjqw=s64-c-rp-mo-br100",
  "/a-/ALV-UjWEITob8rEIhBC1ZurvDKuCOeEtLhfKnaYWgHokkYbZQ91X5_U96w=s64-c-rp-mo-br100",
  "/a-/ALV-UjVpvpwWuCmHz_oh7yDePC-TY1FmGogM9o1j0Va0OlzqYlAZ6VOOBA=s64-c-rp-mo-ba12-br100",
  "/a-/ALV-UjWNgkgIxnDj1nfGWDZZHcLIg1BltBCa9B47mD55pGm0wQfnCTpJ=s64-c-rp-mo-br100",
];

/**
 * Content-Security-Policy. Every source below is derived from what the code
 * actually loads — see the comments per directive. A CSP is easy to get
 * subtly wrong and a wrong one renders a blank page, so if you add a new
 * third-party embed or a runtime-injected style/script, update this too.
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  // Clickjacking. Layered with X-Frame-Options; this is the directive that
  // actually covers modern browsers. Matters here: the page is full of
  // prominent booking CTAs.
  "frame-ancestors 'none'",
  "object-src 'none'",
  // 'unsafe-inline' is REQUIRED. src/app/layout.tsx ships two inline
  // `dangerouslySetInnerHTML` scripts (the `.js` class bootstrap and the
  // JSON-LD), and App Router emits inline RSC payload scripts. Nonces would
  // need middleware.ts, which this project deliberately does not have.
  // Do NOT add 'strict-dynamic' here: per CSP3 it would nullify
  // 'unsafe-inline' and blank the page.
  //
  // 'unsafe-eval' is appended in DEVELOPMENT ONLY. React's dev build calls
  // eval() to reconstruct component stack traces and warns
  // "eval() is not supported in this environment"; React never calls eval()
  // in production, so shipping this token to real visitors would be pure
  // attack surface for zero benefit.
  //
  // WHY NOT JUST SKIP THE CSP IN DEV: a policy only ever exercised against
  // production is a policy that breaks the site on deploy day. Relaxing the one
  // token dev needs keeps CSP violations visible locally, so the next.config
  // comments above stay true and testable.
  `script-src 'self' 'unsafe-inline'${
    process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""
  }`,
  // 'unsafe-inline' is REQUIRED here too — it covers inline `style`
  // attributes, which this codebase uses in six places to drive layout and
  // animation timing: Footer.tsx (iframe `border: 0`, link colour),
  // Reveal.tsx + LetterReveal.tsx (`transitionDelay` / `animationDelay`),
  // WhatsAppButton.tsx (`fontFamily`, `animationDelay`). Removing it breaks
  // the scroll-reveal animations and collapses the map iframe box.
  "style-src 'self' 'unsafe-inline'",
  // `data:` is required by the inline noise texture in globals.css (the
  // `data:image/svg+xml` background-image). The googleusercontent host is
  // listed for defence-in-depth: avatars are actually delivered through the
  // same-origin `/_next/image` proxy, so the browser never contacts it
  // directly today.
  "img-src 'self' data: https://lh3.googleusercontent.com",
  // Fonts are self-hosted via @fontsource — no Google Fonts host needed.
  "font-src 'self'",
  "connect-src 'self'",
  "media-src 'self'",
  "manifest-src 'self'",
  // BOTH origins are required. Footer.tsx builds the iframe src as
  // `https://maps.google.com/maps?...&output=embed`, and that URL 302-redirects
  // to `https://www.google.com/maps/embed?...`. frame-src is re-evaluated
  // after the redirect, so allowing only maps.google.com blocks the map.
  "frame-src https://maps.google.com https://www.google.com",
  // Deliberately NOT set:
  // - `upgrade-insecure-requests` would rewrite first-party subresources to
  //   https on the http://localhost used by `next dev`/`next start`, breaking
  //   local dev for no gain — HSTS already upgrades real browsers.
  // - `Cross-Origin-Embedder-Policy` would require cross-origin isolation
  //   and therefore break the Google Maps iframe.
].join("; ");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: ALLOWED_AVATAR_PATHS.map((pathname) => ({
      protocol: "https",
      hostname: "lh3.googleusercontent.com",
      port: "",
      // NOTE for maintainers: in Next 16 these are picomatch GLOBS matched
      // against `pathname`, not regular expressions.
      //  - There is no `path` key. Config normalisation only carries over
      //    { protocol, hostname, port, pathname, search }, so a `path`
      //    property is silently dropped and `pathname` falls back to '**' —
      //    i.e. the whole host is allowed again, with no error to warn you.
      //  - `pathname` is a single string, not an array, hence one pattern
      //    object per allowed path.
      //  - A wildcard-free glob is compiled to a fully anchored regex, so
      //    each literal below matches that exact path and nothing else.
      // Do not "upgrade" these to `^...$` regexes — picomatch treats `^`/`$`
      // as literal characters and the avatars stop loading.
      pathname,
    })),
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: CONTENT_SECURITY_POLICY,
          },
          {
            key: "Strict-Transport-Security",
            // `preload` is intentionally omitted: submitting to the browser
            // preload list is effectively irreversible (removal takes months
            // and requires the client to own every subdomain over HTTPS
            // forever). max-age + includeSubDomains give the protection
            // without that lock-in, and can be upgraded later if needed.
            // Hostinger terminates TLS, so this is served over HTTPS.
            value: "max-age=63072000; includeSubDomains",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            // The site is a static brochure with booking links: it needs none
            // of these device capabilities.
            value: [
              "accelerometer=()",
              "autoplay=()",
              "camera=()",
              "display-capture=()",
              "encrypted-media=()",
              "fullscreen=(self)",
              "geolocation=()",
              "gyroscope=()",
              "magnetometer=()",
              "microphone=()",
              "midi=()",
              "payment=()",
              "picture-in-picture=()",
              "publickey-credentials-get=()",
              "screen-wake-lock=()",
              "usb=()",
              "xr-spatial-tracking=()",
            ].join(", "),
          },
          {
            // Safe despite `target="_blank"` links to Instagram/WhatsApp:
            // every one of them already carries rel="noopener noreferrer",
            // so the opener was already severed.
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            // Disable the legacy XSS auditor. All current browsers ignore
            // this header; the OWASP recommendation is to set it to 0 so old
            // browsers don't run the auditor, which can itself introduce
            // vulnerabilities.
            key: "X-XSS-Protection",
            value: "0",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
