import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import MenuItems from "./MenuItems";

export default function DashboardNavMenu() {
  // Custom DropDown
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <button onClick={() => setShowMenu(!showMenu)}>
        <FaUserAlt size={60} />
      </button>
      {showMenu && (
        <div className="bg-sky-800 flex flex-col rounded-lg absolute top-[77px] right-12 w-48 h-48">
          <MenuItems />
        </div>
      )}
    </div>
  );
}
