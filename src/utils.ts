// Prefix an internal path with the site's base path ('/Projects'),
// so links work both locally and on GitHub Pages.
export function url(path = '/') {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return base + (path.startsWith('/') ? path : '/' + path);
}
