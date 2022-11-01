import Moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/common/Button";
import Dropdown from "../components/common/Dropdown";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { listPackage } from "../utils/constant";
import userApi from "./../api/user";
import { getAllUser } from "./../redux/features/userSlice";
import TableTitle from "./../components/common/TableTitle";

const Package = () => {
  let i = 1;
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);
  const currentDate = new Date();

  const [renewItem, setRenewItem] = useState({
    userId: "",
    packageId: "",
    name: "",
    month: 0,
  });

  const listTableTitle = [
    "ID",
    "Username",
    "Package",
    "Start Date",
    " End Date",
    "Status",
    "Renewal",
  ];

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleItemChange = (e: any) => {
    setRenewItem({
      ...renewItem,
      name: e.target.innerText,
      month: e.target.dataset.value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await userApi.updateUserPackage(
        renewItem.userId,
        renewItem.packageId,
        renewItem.month
      );
      toast.success("Renew package successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      resetData();
      dispatch(getAllUser());
    } catch (error: any) {
      toast.error("Change user status failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const resetData = () => {
    setRenewItem({
      userId: "",
      packageId: "",
      name: "",
      month: 0,
    });
  };

  return (
    <>
      <div className="w-full h-[66px] border-b border-thin">
        <div className="title flex items-center justify-between">
          <div className="h-full flex items-center gap-2 text-white">
            <h4 className="text-[30px]">Package</h4>
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
            {users.map((user, index) =>
              user.package?.map((pack, index) => (
                <tr key={index} className="border-b border-thin">
                  {index === 0 && (
                    <>
                      <td
                        className=" px-2 py-4 text-white bg-[#212529]"
                        rowSpan={user.package?.length}
                      >
                        {i++}
                      </td>
                      <td
                        className=" px-2 py-4 text-white bg-[#212529] border-r border-thin"
                        rowSpan={user.package?.length}
                      >
                        {user.username}
                      </td>
                    </>
                  )}
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {pack.type}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {Moment(pack.startDate?.toString()).format(
                      "DD/MM/YYYY HH:MM:SS"
                    )}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {Moment(pack.endDate?.toString()).format(
                      "DD/MM/YYYY HH:MM:SS"
                    )}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {pack.endDate && new Date(pack.endDate) < currentDate
                      ? "Expired"
                      : "Unexpired"}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {pack.endDate &&
                      new Date(pack.endDate) < currentDate &&
                      renewItem.userId === "" && (
                        <Button
                          name="Renew"
                          px={4}
                          py={2}
                          color="bg-green-500"
                          onClick={() =>
                            setRenewItem({
                              ...renewItem,
                              userId: user._id,
                              packageId: pack._id as string,
                            })
                          }
                        />
                      )}

                    {renewItem.packageId && renewItem.packageId === pack._id && (
                      <div>
                        <Dropdown
                          list={listPackage}
                          onItemClick={handleItemChange}
                          selectedItem={renewItem.name}
                        />
                        <Button
                          name="Save"
                          px={4}
                          py={2}
                          color="bg-green-500"
                          onClick={handleSave}
                        />
                        <Button
                          name="Cancel"
                          px={4}
                          py={2}
                          color="bg-red-500"
                          onClick={resetData}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Package;
