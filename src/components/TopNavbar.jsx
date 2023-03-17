import "./components.css";
import {
  AiOutlineMenuUnfold,
  BsMoon,
  BsMoonFill,
  BsSun,
  BsSunFill,
  IoIosNotificationsOutline,
  BiMessageDetail,
  FaUserAlt,
} from "../constants";
import { useTheme, useChangeTheme, useToggleSidebar } from "../context";

export default function TopNavbar() {
  const darkTheme = useTheme();
  const changeTheme = useChangeTheme();
  const toggleSidebar = useToggleSidebar();

  return (
    <div className="flex flex-row items-center bg-slate-800 h-10 px-4">
      <div
        className="menu-btn p-1 rounded bg-slate-600 hover:bg-slate-500 active:bg-slate-700"
        onClick={() => toggleSidebar((prevSidebar) => !prevSidebar)}
      >
        <AiOutlineMenuUnfold className="text-slate-200 text-xl" />
      </div>
      <div className="flex flex-row items-center justify-end w-full">
        <div className="flex flex-row items-center justify-between space-x-10">
          <div className="flex flex-row justify-between w-14 bg-slate-600 h-6 rounded-full items-center">
            <div
              className={`flex flex-col items-center justify-center rounded-full h-6 w-6 ${
                darkTheme ? "bg-slate-700" : ""
              }`}
              onClick={() => changeTheme(true)}
            >
              {darkTheme ? (
                <BsMoonFill className="text-slate-200" />
              ) : (
                <BsMoon className="text-slate-200" />
              )}
            </div>
            <div
              className={`flex flex-col items-center justify-center rounded-full h-6 w-6 ${
                darkTheme ? "" : "bg-slate-700"
              }`}
              onClick={() => changeTheme(false)}
            >
              {darkTheme ? (
                <BsSun className="text-slate-200" />
              ) : (
                <BsSunFill className="text-slate-200" />
              )}
            </div>
          </div>

          <div className="flex flex-row items-center justify-between space-x-4">
            <IoIosNotificationsOutline className="text-2xl text-slate-200" />
            <BiMessageDetail className="text-xl text-slate-200" />
          </div>

          <div>
            <FaUserAlt className="text-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
