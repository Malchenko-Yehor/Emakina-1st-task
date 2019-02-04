export class MobileMenu {
  private menu: Element;
  private icon: Element;
  private overlay: Element;
  private submenus: Element[];
  private items: Element[];
  private opened: boolean;

  constructor(menu: Element, overlay: Element, icon: Element) {
    this.menu = menu;
    this.overlay = overlay;
    this.icon = icon;
    this.submenus = [];
    this.opened = false;

    this.findSubmenus();

    this.setCloseListener();
    icon.addEventListener('click', this.toggle);
  }

  private findSubmenus(): void {
    this.items = Array.from(this.menu.getElementsByClassName('mobile-menu__item'));

    this.items.forEach(item => {
      item.addEventListener('click', () => {
        this.reset();

        if (item.getElementsByClassName('mobile-menu__submenu').length > 0) {
          this.submenus.push(item.getElementsByClassName('mobile-menu__submenu')[0]);
          item.classList.toggle('is-active');
          item.getElementsByClassName('mobile-menu__submenu')[0].classList.toggle('is-active');
        }
      });

    });
  };

  private reset(): void {
    this.items.forEach(item => item.classList.remove('is-active'));
    this.submenus.forEach(submenu => submenu.classList.remove('is-active'));
  }

  private setCloseListener(): void {
    document.addEventListener('mousedown', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const element = document.elementFromPoint(x, y);

      if (element === this.overlay && this.opened) this.toggle();
    });
  }

  toggle = () => {
    this.opened = !this.opened;
    this.reset();
    this.menu.classList.toggle('is-active');
    this.overlay.classList.toggle('is-active');
    this.icon.classList.toggle('is-active');
  }
}