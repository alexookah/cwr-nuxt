export default defineEventHandler((event) => {
    const url = getRequestURL(event);

    if (url.pathname === '/shop') {
        return sendRedirect(event, '/products', 301);
    } else if (url.pathname === '/contact-us') {
        return sendRedirect(event, '/contact', 301);
    }
});