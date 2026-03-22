export async function onRequest(context) {
  // Let the request continue to the next handler (static file, page, etc.)
  const response = await context.next();

  // Parse the requested URL
  const url = new URL(context.request.url);

  // Check if the request is for static assets
  // This includes:
  // - Vite-built assets in /assets/
  // - Manually added icons in /icons/
  // - Any file ending with common static extensions
  if (
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|css|js|woff2)$/)
  ) {
    // Set long-term caching headers for static files
    // "immutable" tells the browser the file will never change
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  // Return the modified response
  return response;
}
