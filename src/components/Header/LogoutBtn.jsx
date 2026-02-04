import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("token"); // remove JWT
    dispatch(logout()); // clear redux, set status to false and userData to null (See authSlice, logout reducer, no argument needed)
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 cursor-pointer hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
