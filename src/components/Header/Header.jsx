import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true, //Always show Home
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus, //If not logged in show Login
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus, //If not logged in show Signup
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus, //If logged in show All Posts
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus, //If logged in show Add Post
    },
  ];

  return (
    <header className="py-3 shadow-md z-10 shadow-gray-700 bg-gray-500 sticky top-0 ">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          {/* ------------ */}
          <ul className="flex gap-2 ml-auto font-bold">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-6 py-2 duration-200 cursor-pointer rounded-full ${
                      location.pathname === item.slug
                        ? "bg-blue-200 text-black "
                        : "hover:bg-gray-400"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null,
            )}

            {/* // Only when authStatus is true then show Logout button*/}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
