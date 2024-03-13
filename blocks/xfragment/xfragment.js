// fetch fragment html
const fetchFragment = async (url) => {
  const response = await (url.querySelector('a').href);
  return response.text();
};


export default async function decorate(block) {
  const [xfragmentUrl] = [...block.children].map(
    (row) => row.firstElementChild,
  );
  const teaserFragment = await fetchFragment(xfragmentUrl);
  if (teaserFragment) {
    const xfragmentDOM = document.createRange().createContextualFragment(text);
    block.innerHTML = teaserFragment;
  }

}
