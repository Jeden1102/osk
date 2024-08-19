import { Menu } from "@/types/menu";
import { useParams } from "next/navigation";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Product",
    path: "product",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "FAQ",
    newTab: false,
    path: "faq",
  },
];
export default menuData;
