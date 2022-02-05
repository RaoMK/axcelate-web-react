import { useLocation } from "react-router-dom";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import NavbarInput from "@material-tailwind/react/NavbarInput";
// import Image from "@material-tailwind/react/Image";
// import Dropdown from "@material-tailwind/react/Dropdown";
// import DropdownItem from "@material-tailwind/react/DropdownItem";
// import ProfilePicture from "assets/img/team-1-800x800.jpg";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  const location = useLocation().pathname;
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <nav className="bg-white md:ml-64 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="md:hidden">
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("left-0")}
          >
            <Icon name="menu" size="2xl" color="white" />
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-64" : "-left-64"
            } z-50 transition-all duration-300`}
          >
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("-left-64")}
            >
              <Icon name="close" size="2xl" color="white" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h4 className="uppercase text-black text-sm tracking-wider mt-1">
            Hello, {currentUser?.name}
          </h4>

          <div className="flex">
            <img className="h-20 w-full" alt="" src={logo} />
          </div>
        </div>
      </div>
    </nav>
  );
}
