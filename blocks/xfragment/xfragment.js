import {decorateBlock, loadBlocks} from '../../scripts/lib-franklin.js';
import { decorateMain } from '../../scripts/scripts.js';
import decorateXFragment from '../xfragment/xfragment.js';

// fetch fragment html
const fetchFragment = async (url) => {
  const response = await fetch(url.querySelector('a').href);
  return response.text();
};


export default async function decorate(block) {
  const [xfragmentUrl] = [...block.children].map(
    (row) => row.firstElementChild,
  );
  const teaserFragment = await fetchFragment(xfragmentUrl);
  if (teaserFragment) {
    //const contentDiv = document.createElement('div');
    //contentDiv.classList.add('teaser-wrapper');
    const xfragmentDOM = document.createRange().createContextualFragment(teaserFragment);
    //contentDiv.appendChild(xfragmentDOM.querySelector('main').firstElementChild.firstElementChild);
    const xfragmentBlock = decorateXFragment(xfragmentDOM.querySelector('main').firstElementChild);
    block.innerHTML = xfragmentBlock.outerHTML;
  }

}
