export default function decorate(block)  {
  block.textContent = 'On this page';
  const ul = document.createElement('ul');
  block.appendChild(ul);

  document
    .querySelectorAll('.section:not(.article-header,.article-toc,.article-full) :where(h1,h2,h3,h4,h5,h6')
    .forEach((elem) => {
      const {id} = elem;
      const text = elem.textContent;

      const li = document.createElement('li');
      const link = document.createElement('a');
      li.appendChild(link);
      link.href = `#${id}`;
      link.textContent = text;
      block.appendChild(li);
    });
}
