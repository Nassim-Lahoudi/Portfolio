export async function onRequest(context) {
  // Call the next handler in the chain.
  // This tells Cloudflare Pages to continue processing the request normally
  // (serving static files, running other functions, etc.)
  // and then return the generated response so we can modify it.
  const response = await context.next();

  // Parse the incoming request URL so we can inspect the path.
  // This allows us to check which file is being requested.
  const url = new URL(context.request.url);

  // We only want to apply long-term caching to static assets.
  // These files rarely change and are safe to cache for a long time.
  //
  // The conditions below check:
  // 1. If the file is inside the /assets/ folder (Vite build output)
  // 2. OR if the file extension matches common static file types:
  //    images, CSS, JS, fonts, icons, etc.
  //
  // If the request matches any of these, we set a strong cache header.
  if (
    url.pathname.startsWith("/assets/") ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|css|js|woff2)$/)
  ) {
    // Set a long-term cache header:
    //
    // public        → allows browser + CDN caching
    // max-age=31536000 → cache for 1 year (in seconds)
    // immutable     → tells the browser the file will never change
    //
    // This is safe because Vite generates hashed filenames,
    // so when the file changes, the filename also changes.
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  // Return the modified response back to the user.
  return response;
}
