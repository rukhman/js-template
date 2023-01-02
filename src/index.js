import { el, mount, setChildren } from 'redom';
import Navigo from 'navigo';
import header from './header.js';
const router = new Navigo('/');

const list = el('p', 'Loading...');
const body = el('div', list, { class: 'body' });
const page = el('div', [header, body]);
mount(document.body, page);

export function isValidEmail(email) {
  return email.includes('@');
}

// function setCatalogList() {
//   fetch('https://fakestoreapi.com/products')
//     .then((res) => res.json())
//     .then((data) => {
//       const ul = createUl(data);
//       list.innerHTML = '';
//       mount(list, ul);
//       setChildren(body, list);
//     });
// }

export function createUl(data) {
  const ul = el('ul');
  setChildren(
    ul,
    data.map((product) =>
      el('li', [
        el('a', product.title, {
          href: `/product/${product.id}`,
          onclick(event) {
            event.preventDefault();
            router.navigate(event.target.getAttribute('href'));
          },
        }),
      ])
    )
  );
  return ul;
}

// function productInfo(id) {
//   body.innerHTML = 'Loading...';
//   fetch(`https://fakestoreapi.com/products/${id}`)
//     .then((res) => res.json())
//     .then((product) => {
//       body.innerHTML = '';
//       const productInfo = el('div', [
//         el('a', 'Back', {
//           href: `/`,
//           onclick(event) {
//             event.preventDefault();
//             router.navigate(event.target.getAttribute('href'));
//           },
//         }),
//         el('h2', product.title),
//         el('p', product.description),
//         el('img', {
//           src: product.image,
//           alt: product.title,
//         }),
//       ]);

//       setChildren(body, productInfo);
//       setChildren(body, productInfo);
//     });
// }

// router.on('/', function () {
//   setCatalogList();
// });
// router.on('/product/:id', ({ data: { id } }) => {
//   productInfo(id);
// });

// router.resolve();
