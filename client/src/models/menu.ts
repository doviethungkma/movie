const homeIcon = require("../assets/icons/home.svg").default;
const hboIcon = require("../assets/icons/logo-hbo.svg").default;
const streamIcon = require("../assets/icons/logo-livestream.svg").default;
const sportIcon = require("../assets/icons/sport.svg").default;

interface IMenuModel {
  id: number;
  name: string;
  icon: string;
}

export const menu: Array<IMenuModel> = [
  { id: 1, name: "Trang chủ", icon: homeIcon },
  { id: 2, name: "HBO", icon: hboIcon },
  { id: 3, name: "Vip", icon: streamIcon },
  { id: 4, name: "Thể thao", icon: sportIcon },
];
