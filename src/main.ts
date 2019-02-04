import './styles/main.scss';
import { MobileMenu } from './mobile-menu';


new MobileMenu(
  document.getElementsByClassName('mobile-menu')[0],
  document.getElementsByClassName('mobile-menu__overlay')[0],
  document.getElementsByClassName('burger-icon')[0]
);