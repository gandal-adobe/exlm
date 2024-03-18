import {decorateBlock, loadCSS, loadBlock} from '../../scripts/lib-franklin.js';
import { decorateMain } from '../../scripts/scripts.js';
import decorateTeaser from '../teaser/teaser.js';

// fetch fragment html
const fetchFragment = async (url) => {
  const response = await fetch(url.querySelector('a').href);
  return response.text();
};


export default async function decorate(block) {
  const fragmentTeaserBlock = block.firstElementChild;
  const [xfragmentUrl] = [...block.children].map(
    (row) => row.firstElementChild,
  );
  const teaserFragment = await fetchFragment(xfragmentUrl);
  if (teaserFragment) {
    const xfragmentDOM = document.createRange().createContextualFragment(teaserFragment);
    const xfragmentDOMBlock = xfragmentDOM.querySelector('main').firstElementChild.firstElementChild;
    decorateBlock(xfragmentDOMBlock);
    await loadBlock(xfragmentDOMBlock);
    // decorateTeaser(xfragmentDOMBlock);
    block.innerHTML = xfragmentDOMBlock.outerHTML;
  }

}
