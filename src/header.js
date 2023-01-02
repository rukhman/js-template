import { el } from 'redom';
import logo from './assets/images/logo.svg';
import './header.scss';

export default el('header', { class: 'header' }, [
  el('h1', { class: 'header-text' }, 'Shop'),
  el('img', {
    class: 'header-image',
    src: logo,
  }),
]);
