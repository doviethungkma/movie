import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import userApi from "../../api/userApi";
import { IUser } from "../../interfaces/user";
import { hideUserDetailModal } from "../../redux/features/commonSlice";
import { hideWatchingModal } from "../../redux/features/movieSlice";
import Button from "../common/Button";
import Input from "../common/Input";
import Modal from "../common/Modal";

const UserDetailModal = () => {
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState<IUser>({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });
  const userId = localStorage.getItem("id") as string;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const getUserDetail = async () => {
    const response = await userApi.getUserDetail(userId);
    const { name, email, phone, gender } = response.data.user;
    setUserDetail({
      name,
      email,
      phone,
      gender,
    });
  };

  const updateUserInfor = async () => {
    try {
      await userApi.editUserInfor(userId, userDetail);
      toast.success("Update infor successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(hideUserDetailModal());
    } catch (error) {
      toast.error("Update infor failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  const closeModal = () => {
    dispatch(hideUserDetailModal());
  };
  return (
    <Modal onClose={closeModal}>
      <div className="p-4 border-b border-thin">
        <h3 className="text-white uppercase text-lg">Tài khoản và cài đặt</h3>
      </div>
      <div className="px-4 py-3 grid grid-cols-2 gap-4">
        <Input
          label="Họ và tên"
          value={
            userDetail.name === undefined ? "Chưa cập nhật" : userDetail.name
          }
          name="name"
          onChange={handleInputChange}
        />
        <Input
          label="Số điện thoại"
          value={
            userDetail.phone === undefined ? "Chưa cập nhật" : userDetail.phone
          }
          name="phone"
          onChange={handleInputChange}
        />
        <Input
          label="Email"
          value={
            userDetail.email === undefined ? "Chưa cập nhật" : userDetail.email
          }
          name="email"
          onChange={handleInputChange}
        />
        <Input
          label="Giới tính"
          value={
            userDetail.gender === undefined
              ? "Chưa cập nhật"
              : userDetail.gender
          }
          name="gender"
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full p-4 flex justify-end gap-4">
        <Button
          width="w-[149px]"
          height="h-[48px]"
          color="text-white"
          bg="bg-red-500"
          borderRadius="rounded-sm"
          hover="hover:opacity-80 transition-all"
          onClick={closeModal}
        >
          Hủy
        </Button>
        <Button
          width="w-[149px]"
          height="h-[48px]"
          color="text-white"
          bg="bg-green-500"
          borderRadius="rounded-sm"
          hover="hover:opacity-80 transition-all"
          onClick={updateUserInfor}
        >
          Lưu
        </Button>
      </div>
    </Modal>
  );
};

export default UserDetailModal;
