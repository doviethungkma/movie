import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getAllUser } from "./../redux/features/userSlice";
import { useSelector } from "react-redux";
import Button from "../components/common/Button";
import userApi from "./../api/user";
import { toast } from "react-toastify";
import TableTitle from "./../components/common/TableTitle";
import Dropdown from "../components/common/Dropdown";
import { listRole } from "./../utils/constant";
import { stringify } from "querystring";

interface IRoleState {
  id: string;
  name: string;
  value: string;
}

const User = () => {
  let i = 1;
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);
  const [isShowChangeRole, setIsShowChangeRole] = useState<boolean>(false);
  const [role, setRole] = useState<IRoleState>({
    id: "",
    name: "",
    value: "",
  });

  console.log(role);

  const listTableTitle = [
    "ID",
    "Username",
    "Name",
    "Phone",
    "Email",
    "Role",
    "Status",
    "Action",
  ];

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const toggleUserStatus = async (id: string, currenStatus: string) => {
    try {
      await userApi.updateUser(id, {
        status: currenStatus === "active" ? "inactive" : "active",
      });
      toast.success("Change user status successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(getAllUser());
    } catch (error) {
      toast.error("Change user status failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const updateUserRole = async () => {
    try {
      await userApi.updateUser(role.id, {
        role: role.value,
      });
      toast.success("Change user role successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(getAllUser());
      setIsShowChangeRole(false);
    } catch (error) {
      toast.error("Change user role failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleItemClick = (e: any) => {
    setRole({
      ...role,
      name: e.target.innerText,
      value: e.target.dataset.value,
    });
  };

  return (
    <>
      <div className="w-full h-[66px] border-b border-thin">
        <div className="title flex items-center justify-between">
          <div className="h-full flex items-center gap-2 text-white">
            <h4 className="text-[30px]">Users</h4>
            <p className="text-[14px] text-gray-500 pt-2">14,452 Total</p>
          </div>
          <div className="h-full flex items-center gap-4">
            <div>
              <p className="text-xs text-gray-500">Sort by:</p>
              <div className="text-white">Date created</div>
            </div>
            <div className="relative h-full">
              <input
                type="text"
                placeholder="Find movie/tv series..."
                className=" bg-[#28282D] py-1 px-3 rounded placeholder:text-sm text-gray-500"
              />
              <i className="bx bx-search absolute right-2 top-1/2 -translate-y-1/2 text-xl text-gray-500"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="table w-full py-6">
        <table className="w-full">
          <thead>
            <tr>
              <TableTitle listTitle={listTableTitle} />
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item, index) => (
                <tr key={index}>
                  <td className=" px-2 py-4 text-white bg-[#212529]">{i++}</td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {item.username}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {item.name}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {item.phone}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {item.email}
                  </td>
                  <td className=" px-2 py-4 text-blue-500 bg-[#212529] hover:text-green-500 cursor-pointer transition-all w-[20%]">
                    {isShowChangeRole && role.id === item._id ? (
                      <div className="flex gap-2">
                        <Dropdown
                          list={listRole}
                          selectedItem={role.name}
                          onItemClick={handleItemClick}
                        />
                        <Button
                          name="Save"
                          px={4}
                          py={2}
                          color="bg-green-500"
                          onClick={updateUserRole}
                        />
                      </div>
                    ) : (
                      <p
                        onClick={() => {
                          setRole({ ...role, id: item._id });
                          setIsShowChangeRole(true);
                        }}
                      >
                        {item.role}
                      </p>
                    )}
                  </td>
                  <td
                    className={`px-2 py-4 text-white bg-[#212529] ${
                      item.status === "active"
                        ? "text-green-500"
                        : "text-red-500"
                    } capitalize`}
                  >
                    {item.status}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529] text-center">
                    <button
                      title={
                        item.status === "active" ? "Block user" : "Unblock user"
                      }
                      className={`${
                        item.status === "active"
                          ? "bg-red-500 hover:bg-red-700"
                          : "bg-green-500 hover:bg-green-700"
                      } px-2 py-1 rounded-md transition-all`}
                      onClick={() => {
                        toggleUserStatus(item._id, item.status as string);
                      }}
                    >
                      <i className="bx bx-x"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
