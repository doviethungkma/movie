const homeIcon = require("../assets/icons/home.svg").default;
const hboIcon = require("../assets/icons/logo-hbo.svg").default;
const streamIcon = require("../assets/icons/logo-livestream.svg").default;
const sportIcon = require("../assets/icons/sport.svg").default;

interface IMenuModel {
  id: number;
  name: string;
  icon: string;
  _id: string;
}

export const menu: Array<IMenuModel> = [
  { id: 1, name: "Trang chủ", icon: homeIcon, _id: "" },
  { id: 2, name: "HBO", icon: hboIcon, _id: "639729908f6a33c7ce933af1" },
  { id: 3, name: "Vip", icon: streamIcon, _id: "639729d98f6a33c7ce933af5" },
  { id: 4, name: "Thể thao", icon: sportIcon, _id: "639729e48f6a33c7ce933af7" },
];
