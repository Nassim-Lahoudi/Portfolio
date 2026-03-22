export async function onRequest(context) {
  // Execute the next handler in the request chain.
  // This allows Cloudflare Pages to serve the requested file normally
  // (static asset, HTML, API route, etc.) before we modify the response.
  const response = await context.next();

  // Parse the request URL so we can inspect the path and file extension.
  const url = new URL(context.request.url);

  // Determine whether the request targets a static asset.
  // We treat the following as static:
  // - Anything inside the /assets/ directory (Vite build output)
  // - Files ending with common static extensions (images, CSS, JS, fonts)
  //
  // This ensures we only apply long-term caching to files that are safe
  // to cache aggressively because Vite generates hashed filenames.
  const isStaticAsset =
    url.pathname.startsWith("/assets/") ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|css|js|woff2)$/);

  if (isStaticAsset) {
    // Cloudflare Pages sets a default Cache-Control header for JS files:
    //   public, max-age=0, must-revalidate
    //
    // This prevents long-term caching unless we explicitly override it.
    // To ensure our custom header is applied, we first remove the existing one.
    response.headers.delete("Cache-Control");

    // Apply long-term caching:
    // - public: allows browser + CDN caching
    // - max-age=31536000: cache for 1 year (in seconds)
    // - immutable: tells the browser the file will never change
    //
    // This is safe because Vite generates unique hashed filenames
    // whenever the file content changes.
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
  }

  // Return the modified response back to the client.
  return response;
}
