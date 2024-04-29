import slider1 from "@/assets/slider/1.png";
import slider2 from "@/assets/slider/2.png";
import slider3 from "@/assets/slider/3.png";
import phonepe from "@/assets/upiapp/phonepe.png"
import gpay from "@/assets/upiapp/gpay.png"
import paytm from "@/assets/upiapp/paytm.png"
import bhimupi from "@/assets/upiapp/bhimupi.png"

export const MAX_VALUE = 5000;
export const PREMIUM_SUBSCRIPTION_AMOUNT = 100

export const navbarData = [
  {
    name: "Cart",
    path: "/user/cart",
  },
  {
    name: "Profile",
    path: "/user/",
  },
];

export const sliderData = [
  {
    link: slider1,
    title: "banner",
  },
  {
    link: slider2,
    title: "banner",
  },
  {
    link: slider3,
    title: "banner",
  },
];

export const categories = [
  {
    name: "smartwatch",
    link: "/shop?category=smartwatch",
    imageUrl: "",
  },
  {
    name: "smartwatch",
    link: "/shop?category=smartwatch",
    imageUrl: "",
  },
  {
    name: "headphone",
    link: "/shop?category=headphone",
    imageUrl: "",
  },
  {
    name: "earphone",
    link: "/shop?category=earphone",
    imageUrl: "",
  },
  {
    name: "headphone",
    link: "/shop?category=headphone",
    imageUrl: "",
  },
  {
    name: "earphone",
    link: "/shop?category=earphone",
    imageUrl: "",
  },
];

export const sortList = [
  {
    name: "Top Items",
    value: "top",
  },
  {
    name: "Newest First",
    value: "newest",
  },
  {
    name: "Lowest First",
    value: "lowest",
  },
  {
    name: "Highest First",
    value: "highest",
  },
];

export const discount = [
  {
    name: "40% And Above",
    value: "40",
  },
  {
    name: "30% And Above",
    value: "30",
  },
  {
    name: "20% And Above",
    value: "20",
  },
  {
    name: "10% And Above",
    value: "10",
  },
];

export const rating = [
  {
    name: "4★ & above",
    value: "4",
  },
  {
    name: "3★ & above",
    value: "3",
  },
  {
    name: "2★ & above",
    value: "2",
  },
];

export const filterCategories = [
  {
    name: "Smartwatch",
    value: "smartwatch",
  },
  {
    name: "Headphones",
    value: "headphone",
  },
  {
    name: "Smartphones",
    value: "smartphone",
  },
  {
    name: "Earphones",
    value: "earphones",
  },
  {
    name: "Gadgets",
    value: "geadgets",
  },
];

export const mobileNavbar = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Notifications",
    path: "/user/notifications",
  },
  {
    name: "Wallet",
    path: "/user/",
  },
  {
    name: "User",
    path: "/user/",
  },
  {
    name: "Cart",
    path: "/user/cart",
  },
];

export const colors = [
  {
    color: "#FFDA10",
  },
  {
    color: "#252C37",
  },
  {
    color: "#5340FF",
  },
  {
    color: "#FF00FF",
  },
];

export const sizes = [
  {
    size: 12,
  },
  {
    size: 89,
  },
  {
    size: 45,
  },
  {
    size: 44,
  },
];

export const claims = [
  {
    icon: "genuine",
    msg: "100% Genuine Products",
  },
  {
    icon: "return",
    msg: "Easy Return Policy",
  },
  {
    icon: "sold",
    msg: process.env.NEXT_PUBLIC_COMPANY_NAME,
  },
];

export const productHighlights = [
  "Guarantee hai bhai product ghar pr aayega.",
  "Guarantee hai bhai product ghar pr aayega.",
  "Guarantee hai bhai product ghar pr aayega.",
  "Guarantee hai bhai product ghar pr aayega.",
  "Guarantee hai bhai product ghar pr aayega.",
];

export const productSpecs = {
  Display: `13"inch sAmoled`,
  Processor: "MediaTek Dimensity",
  Price: "teri okat se bahar",
};

export const productWarranty = {
  serviceType: "null",
  covered: "null",
};

export const accountSettings = [
  {
    name: "Profile Information",
  },
  {
    name: "Manage Addresses",
  },
  {
    name: "Change Password",
  },
  {
    name: "Log out",
  },
];

export const payments = [
  // {
  //   name: "Save UPI",
  // },
  // {
  //   name: "Cards",
  // },
  {
    name: "My Wallets",
  },
];

export const mystuffs = [
  {
    name: "Notifications",
  },
  {
    name: "Wishlist",
  },
];

export const help = [
  {
    name: "About Us",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Terms & Conditions",
  },
  {
    name: "Privacy Policy",
  },
];

export const quantities = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

export const upiapp = [
  {
    name: "gpay",
    img: gpay
  },
  {
    name: "phonepe",
    img: phonepe
  },
  {
    name: "paytm",
    img: paytm
  },
  {
    name: "bhimupi",
    img: bhimupi
  },
]