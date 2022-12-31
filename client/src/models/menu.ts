interface IMenuModel {
  id: number;
  name: string;
  icon: string;
  _id: string;
}

export const menu: Array<IMenuModel> = [
  { id: 1, name: "Trang chủ", icon: "mingcute:home-2-line", _id: "" },
  {
    id: 2,
    name: "HBO",
    icon: "simple-icons:hbo",
    _id: "639729908f6a33c7ce933af1",
  },
  {
    id: 3,
    name: "Vip",
    icon: "mingcute:vip-2-line",
    _id: "639729d98f6a33c7ce933af5",
  },
  {
    id: 4,
    name: "Thể thao",
    icon: "ph:soccer-ball-light",
    _id: "639729e48f6a33c7ce933af7",
  },
];
