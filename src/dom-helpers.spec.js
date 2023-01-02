import { createUl } from './index';

test('should create ul', () => {
  const data = [
    {
      id: 1,
      title: 'expample one',
    },
    {
      id: 2,
      title: 'expample two',
    },
  ];
  const expectedText =
    '<ul><li><a href="/product/1">expample one</a></li><li><a href="/product/2">expample two</a></li></ul>';
  const ul = createUl(data);
  expect(ul).toBeInstanceOf(HTMLUListElement);
  expect(ul.outerHTML).toBe(expectedText);
});
