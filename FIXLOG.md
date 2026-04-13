# Known Issues & Post-Audit Caveats

The Production-Readiness pass successfully pruned the frontend UI, streamlined variables, crushed structural errors and enforced WCAG compliance. However, there are a few items documented here for future system architects or backend integration teams:

## 1. Contact Us Module Integration 
The Contact Us page (`/contact`) currently operates on a local simulated state (`[submitted, setSubmitted]`). 
- **Requirement:** A backend logic layer (e.g., Next.js App Router API Route or a third-party service like SendGrid/Resend or Formspree) must be hooked to the form `onSubmit` handler to actually dispatch the payload.
- **Tip:** Ensure the logic awaits a `200 OK` response before triggering `setSubmitted(true)` to preserve the UX integrity of the Success animation.

## 2. Dynamic Component Loaders
We successfully decoupled heavy components (like Google Maps) into `next/dynamic` asynchronous loaders (`ssr: false`). 
- **Wait State:** While the chunk loads over the network, it currently renders a blank shell by default via NextJS. If network latencies are higher, the team might consider inserting a `<PlaceholderSkeleton />` frame in the `loading: () => <Placeholder />` options parameter to maintain aesthetics if Map load times exceed 1 second.

## 3. Image Optimization Cache
We integrated `loading="lazy"` combined with explicit bounding sizes (`width`, `height`) on the raw `<img>` tags on heavily graphic pages to annihilate Cumulative Layout Shifts (CLS). 
- Next.js strictly prefers using the `next/image` `<Image />` component so it can handle multi-size WebP conversion natively. Using native `<img>` means images bypass Next's Image Optimization API. If bandwidth consumption becomes a severe issue on Vercel/Netlify, bulk replace `<img src...>` with `<Image src...>` and map specific dimension domains to Next.config.`
