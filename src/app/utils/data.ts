import { mImage } from "../../../public/images";
import { icons } from "../../../public/icons";
import { routes } from "./const";
import { dropDownIcon } from "../../../public/icons/dropdown-icons";

export const menus = [
  { title: "Home", path: routes.home },
  { title: "Contact", path: routes.contact },
  { title: "About", path: routes.about },
  { title: "Sign Up", path: routes.singup },
];

export const navDropdown = [
  { icon: dropDownIcon.user, title: "Manage My Account", link: routes.account },
  { icon: dropDownIcon.mallbag, title: "My Order", link: routes.account },
  {
    icon: dropDownIcon.cancel,
    title: "My Cancellations",
    link: routes.account,
  },
  { icon: dropDownIcon.reviews, title: "My Reviews", link: routes.account },
  { icon: dropDownIcon.logout, title: "Logout", link: routes.account },
];

export const myAccountNav = [
  {
    title: "Manage My Account",
    link: "#",
    subNav: [
      { title: "My Profile", link: routes.myprofile },
      { title: "My Address Book", link: routes.myaddressbook },
      { title: "My Payment Options", link: routes.mypaymentoption },
    ],
  },
  {
    title: "My Orders",
    link: "#",
    subNav: [
      { title: "My Returns", link: "#" },
      { title: "My Cancellations", link: "#" },
    ],
  },
  { title: "My WhishList", link: "#" },
];

export const accountMenus = [
  { title: "My Account", link: "#" },
  { title: "Login / register", link: "#" },
  { title: "whish list", link: "#" },
  { title: "Cart", link: "#" },
  { title: "Shop", link: "#" },
];

export const quickLinkMenu = [
  { title: "Privacy Policy", link: "#" },
  { title: "Terms Of Use", link: "#" },
  { title: "FAQ", link: "#" },
  { title: "Contact", link: "#" },
];

export const FlashSalesCardData = [
  {
    image: mImage.product1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: "$120",
    newPrice: "$160",
    rating: "(88)",
    discount: "-30%",
  },
  {
    image: mImage.product2,
    title: "AK-900 Wired Keyboard",
    oldPrice: "$960",
    newPrice: "$1160",
    rating: "(75)",
    discount: "-38%",
  },
  {
    image: mImage.product3,
    title: "IPS LCD Gaming Monitor",
    oldPrice: "$370",
    newPrice: "$400",
    rating: "(99)",
    discount: "-20%",
  },
  {
    image: mImage.product4,
    title: "S-Series Comfort Chair",
    oldPrice: "$375",
    newPrice: "$400",
    rating: "(99)",
    discount: "-22%",
  },
  {
    image: mImage.product1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: "$120",
    newPrice: "$160",
    rating: "(88)",
    discount: "-50%",
  },
  {
    image: mImage.product2,
    title: "AK-900 Wired Keyboard",
    oldPrice: "$960",
    newPrice: "$1160",
    rating: "(75)",
    discount: "-30%",
  },
  {
    image: mImage.product3,
    title: "IPS LCD Gaming Monitor",
    oldPrice: "$370",
    newPrice: "$400",
    rating: "(99)",
    discount: "-38%",
  },
  {
    image: mImage.product4,
    title: "S-Series Comfort Chair",
    oldPrice: "$375",
    newPrice: "$400",
    rating: "(99)",
    discount: "-15%",
  },
];

export const browseCategoryData = [
  { title: "Phone", icon: icons.cellphone, icon2: icons.cellphone2 },
  { title: "Computer", icon: icons.computer, icon2: icons.computer2 },
  { title: "SmartWatch", icon: icons.smartwatch, icon2: icons.smartwatch2 },
  {
    title: "Camera",
    icon: icons.camera,
    icon2: icons.camera2,
  },
  { title: "HeadPhones", icon: icons.headphone, icon2: icons.headphone2 },
  { title: "Gaming", icon: icons.gamepad, icon2: icons.gamepad2 },
  { title: "Computer", icon: icons.computer, icon2: icons.computer2 },
  { title: "SmartWatch", icon: icons.smartwatch, icon2: icons.smartwatch2 },
];

export const bestSellingProductsData = [
  {
    image: mImage.bestSell4,
    title: "The north coat",
    oldPrice: "$260",
    newPrice: "$360",
    rating: "(65)",
  },
  {
    image: mImage.bestSell2,
    title: "Gucci duffle bag",
    oldPrice: "$960",
    newPrice: "$1160",
    rating: "(65)",
  },
  {
    image: mImage.bestSell3,
    title: " RGB liquid CPU Cooler",
    oldPrice: "$960",
    newPrice: "$1160",
    rating: "(65)",
  },

  {
    image: mImage.bestSell1,
    title: "Small BookSelf",
    oldPrice: "$260",
    newPrice: "$360",
    rating: "(65)",
  },
];

export const ExploreProductsData = [
  {
    image: mImage.explore1,
    title: "Breed Dry Dog Food",
    newPrice: "$360",
    rating: "(65)",
  },
  {
    image: mImage.explore2,
    title: "CANON EOS DSLR Camera",
    newPrice: "$1160",
    rating: "(65)",
    condition: "NEW",
  },
  {
    image: mImage.explore3,
    title: " ASUS FHD Gaming Laptop",
    newPrice: "$1160",
    rating: "(65)",
    color: "color",
  },

  {
    image: mImage.explore4,
    title: "Curology Product Set",
    newPrice: "$360",
    rating: "(65)",
    condition: "NEW",
  },
  {
    image: mImage.explore1,
    title: "Breed Dry Dog Food",
    newPrice: "$360",
    rating: "(65)",
    color: "color",
  },
  {
    image: mImage.explore2,
    title: "CANON EOS DSLR Camera",
    newPrice: "$1160",
    rating: "(65)",
    condition: "NEW",
  },
  {
    image: mImage.explore3,
    title: " ASUS FHD Gaming Laptop",
    newPrice: "$1160",
    rating: "(65)",
  },

  {
    image: mImage.explore4,
    title: "Curology Product Set",
    newPrice: "$360",
    rating: "(65)",
    condition: "NEW",
  },
  {
    image: mImage.explore5,
    title: "Kids Electric Car",
    newPrice: "$360",
    rating: "(65)",
    color: "color",
  },
  {
    image: mImage.explore6,
    title: "Jr. Zoom Soccer Cleats",
    newPrice: "$1160",
    rating: "(65)",
    condition: "NEW",
  },
  {
    image: mImage.explore7,
    title: " GP11 Shooter USB Gamepad",
    newPrice: "$1160",
    rating: "(65)",
  },

  {
    image: mImage.explore8,
    title: "Quilted Satin Jacket",
    newPrice: "$360",
    rating: "(65)",
    condition: "NEW",
    color: "color",
  },
  {
    image: mImage.explore1,
    title: "Breed Dry Dog Food",
    newPrice: "$360",
    rating: "(65)",
  },
  {
    image: mImage.explore2,
    title: "CANON EOS DSLR Camera",
    newPrice: "$1160",
    rating: "(65)",
    color: "color",
  },
  {
    image: mImage.explore3,
    title: " ASUS FHD Gaming Laptop",
    newPrice: "$1160",
    rating: "(65)",
  },

  {
    image: mImage.explore4,
    title: "Curology Product Set",
    newPrice: "$360",
    rating: "(65)",
    condition: "NEW",
  },
  {
    image: mImage.explore5,
    title: "Kids Electric Car",
    newPrice: "$360",
    rating: "(65)",
    color: "color",
  },
  {
    image: mImage.explore6,
    title: "Jr. Zoom Soccer Cleats",
    newPrice: "$1160",
    rating: "(65)",
    condition: "NEW",
  },
  {
    image: mImage.explore7,
    title: " GP11 Shooter USB Gamepad",
    newPrice: "$1160",
    rating: "(65)",
  },

  {
    image: mImage.explore8,
    title: "Quilted Satin Jacket",
    newPrice: "$360",
    rating: "(65)",
    color: "color",
  },
];

export const homeServicesData = [
  {
    icon: icons.delivery,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: icons.customerService,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: icons.secure,
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
  },
];

export const whishListdData = [
  {
    image: mImage.product1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: "$120",
    newPrice: "$160",
    trash: true,
    review: false,
    discount: "-30%",
  },
  {
    image: mImage.product2,
    title: "AK-900 Wired Keyboard",
    trash: true,
    review: false,
    newPrice: "$1160",
  },
  {
    image: mImage.product3,
    title: "IPS LCD Gaming Monitor",
    oldPrice: "$370",
    newPrice: "$400",
    trash: true,
    review: false,
  },
  {
    image: mImage.product4,
    title: "S-Series Comfort Chair",
    trash: true,
    review: false,
    newPrice: "$400",
    discount: "-22%",
  },
];

export const justForYouData = [
  {
    image: mImage.product1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: "$120",
    newPrice: "$160",
    discount: "-30%",
    trash: false,
    review: true,
    stars: true,
  },
  {
    image: mImage.product2,
    title: "AK-900 Wired Keyboard",
    newPrice: "$1160",
    trash: false,
    review: true,
    stars: true,
  },
  {
    image: mImage.product3,
    title: "IPS LCD Gaming Monitor",
    oldPrice: "$370",
    newPrice: "$400",
    condition: "NEW",
    trash: false,
    review: true,
    stars: true,
  },
  {
    image: mImage.product4,
    title: "S-Series Comfort Chair",
    newPrice: "$400",
    trash: false,
    review: true,
    stars: true,
  },
];

export const cartData = [
  {
    product: mImage.product3,
    title: "LCD Monitor",
    price: "$650",
    quantity: "01",
    subtotal: "$650",
  },
  {
    product: mImage.product1,
    title: "Hi GamePad",
    price: "$650",
    quantity: "02",
    subtotal: "$650",
  },
];

export const monyMehtod = [
  { method: mImage.moneyMethod1 },
  { method: mImage.moneyMethod2 },
  { method: mImage.moneyMethod3 },
  { method: mImage.moneyMethod4 },
];

export const sitePerformanceDashboardData = [
  {
    icon: icons.shopWhite,
    Icon2: icons.shop,
    data: "10.5k",
    description: "Sallers active our site",
  },
  {
    icon: icons.saleBagWhite,
    Icon2: icons.saleBag,
    data: "10.5k",
    description: "Sallers active our site",
  },
  {
    icon: icons.shoppingBagWhite,
    data: "10.5k",
    Icon2: icons.shoppingBag,
    description: "Sallers active our site",
  },
  {
    icon: icons.moneyBagWhite,
    Icon2: icons.moneyBag,
    data: "10.5k",
    description: "Sallers active our site",
  },
];

export const innovatorHubData = [
  {
    image: mImage.founder,
    name: "Tom Cruise",
    designation: "Founder & Chairman",
  },
  {
    image: mImage.director,
    name: "Emma Watson",
    designation: "Managing Director",
  },
  {
    image: mImage.designer,
    name: "Will Smith",
    designation: "Product Designer",
  },
  {
    image: mImage.founder,
    name: "Tom Cruise",
    designation: "Founder & Chairman",
  },
  {
    image: mImage.director,
    name: "Emma Watson",
    designation: "Managing Director",
  },
  {
    image: mImage.designer,
    name: "Will Smith",
    designation: "Product Designer",
  },
  {
    image: mImage.founder,
    name: "Tom Cruise",
    designation: "Founder & Chairman",
  },
  {
    image: mImage.director,
    name: "Emma Watson",
    designation: "Managing Director",
  },
  {
    image: mImage.designer,
    name: "Will Smith",
    designation: "Product Designer",
  },
];

export const productDetailsData = [
  { image: mImage.productdetail1 },
  { image: mImage.productdetail2 },
  { image: mImage.productdetail3 },
  { image: mImage.productdetail4 },
];

export const relatedItemData = [
  {
    image: mImage.product1,
    title: "HAVIT HV-G92 Gamepad",
    oldPrice: "$120",
    newPrice: "$160",
    rating: "(88)",
    discount: "-30%",
  },
  {
    image: mImage.product2,
    title: "AK-900 Wired Keyboard",
    oldPrice: "$960",
    newPrice: "$1160",
    rating: "(75)",
    discount: "-38%",
  },
  {
    image: mImage.product3,
    title: "IPS LCD Gaming Monitor",
    oldPrice: "$370",
    newPrice: "$400",
    rating: "(99)",
    discount: "-20%",
  },
  {
    image: mImage.product4,
    title: "S-Series Comfort Chair",
    oldPrice: "$375",
    newPrice: "$400",
    rating: "(99)",
  },
];

export interface IBreadCrumb {
  name: string;
  path: string;
}

export const cartBreadCrums: IBreadCrumb[] = [
  { name: "Home", path: routes.home },
  { name: "Cart", path: routes.cart },
];

export const checkOutBreadCrums: IBreadCrumb[] = [
  { name: "Account", path: routes.account },
  { name: "My Account", path: "#" },
  { name: "Product", path: "#" },
  { name: "View Cart", path: routes.cart },
  { name: "Check Out", path: routes.checkout },
];

export const accountBreadCrums: IBreadCrumb[] = [
  { name: "Home", path: routes.home },
  { name: "My Account", path: routes.account },
];

export const aboutBreadCrums: IBreadCrumb[] = [
  { name: "Home", path: routes.home },
  { name: "About", path: routes.about },
];

export const contactBreadCrums: IBreadCrumb[] = [
  { name: "Home", path: routes.home },
  { name: "Contact", path: routes.contact },
];

export const productDetailsBreadCrums: IBreadCrumb[] = [
  { name: "Account", path: routes.account },
  { name: "Gaming", path: "#" },
  { name: "Havic HV G-92 Gamepad", path: "#" },
];
