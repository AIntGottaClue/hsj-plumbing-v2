export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export function u(p: string): string {
  if (!p) return '#';
  if (/^(https?:|mailto:|tel:|#)/.test(p)) return p;
  return base + (p.startsWith('/') ? p : '/' + p);
}
export function img(p: string): string { return base + '/' + p.replace(/^\//, ''); }
export function fix(html: string): string {
  return (html || '').replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`);
}
export function strip(html: string): string {
  return (html || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;|\u00a0/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}
export function tel(p: string): string { return 'tel:' + p.replace(/[^\d+]/g, ''); }
