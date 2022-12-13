interface IUserDetailMenu {
  id?: number;
  name?: string;
  link?: string;
}

export const menu: Array<IUserDetailMenu> = [
  { id: 1, name: "Tài khoản và cài đặt" },
  { id: 2, name: "Dịch vụ đã mua" },
  { id: 3, name: "Đang xem" },
  { id: 4, name: "Danh sách của tôi" },
];
