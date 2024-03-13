export async function getFragment(url) {
  const response = await fetch(url.querySelector('a').href);
  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error('error loading fragment details', response);
    return null;
  }
  const text = await response.text();
  if (!text) {
    // eslint-disable-next-line no-console
    console.error('fragment details empty', url);
    return null;
  }
  return text;
}


export default async function decorate(block) {
  const [xfragmentUrl] = [...block.children].map(
    (row) => row.firstElementChild,
  );
  const text = getFragment(xfragmentUrl);
  const xfragmentDOM = document.createRange().createContextualFragment(text);
  block.innerHTML = text;
}
