import { categories } from "./categories";

export interface MenuItem {
  id: string;
  label: string;
  route?: string;
  submenu?: MenuItem[];
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
    submenu: [
      { id: "all-categories", label: "All Categories", route: "/shop" },
      ...categories.map((category) => ({
        id: category.name.toLowerCase().replace(/\s+/g, "-"),
        label: category.name,
        route: `/shop?category=${encodeURIComponent(category.name)}`,
      })),
    ],
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
