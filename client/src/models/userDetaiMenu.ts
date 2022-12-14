import { showUserDetailModal } from "../redux/features/commonSlice";
import { showWatchingModal } from "../redux/features/movieSlice";

interface IUserDetailMenu {
  id?: number;
  name?: string;
  link?: string;
  icon?: string;
  action?: any;
}

export const userDetailMenu: Array<IUserDetailMenu> = [
  {
    id: 1,
    name: "Tài khoản và cài đặt",
    icon: "bx bx-user-circle",
    action: showUserDetailModal(),
  },
  { id: 2, name: "Dịch vụ đã mua", icon: "bx bx-credit-card-front" },
  { id: 3, name: "Đang xem", icon: "bx bx-movie-play" },
  { id: 4, name: "Danh sách của tôi", icon: "bx bx-file" },
];
