export interface MenuItem {
  id: string;
  label: string;
  route?: string;
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    route: "/",
  },
  {
    id: "about",
    label: "About",
    route: "/about",
  },
  {
    id: "shop",
    label: "Shop",
    route: "/shop",
  },
  {
    id: "faq",
    label: "Faq",
    route: "/faq",
  },
  {
    id: "contact",
    label: "Contact",
    route: "/contact",
  },
];
