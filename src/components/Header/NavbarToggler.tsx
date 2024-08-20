import { useState } from "react";

function NavbarToggler({
  onNavbarToggle,
}: {
  onNavbarToggle: (navbarOpen: boolean) => void;
}) {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
    onNavbarToggle(navbarOpen);
  };

  return (
    <button
      onClick={navbarToggleHandler}
      id="navbarToggler"
      aria-label="Mobile Menu"
      className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
    >
      <span
        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-gray-900 dark:bg-white ${
          navbarOpen ? " top-[7px] rotate-45" : " "
        }`}
      />
      <span
        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-gray-900 dark:bg-white ${
          navbarOpen ? "opacity-0 " : " "
        }`}
      />
      <span
        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-gray-900 dark:bg-white" : "bg-white ${
          navbarOpen ? " top-[-9px] -rotate-45" : " "
        }`}
      />
    </button>
  );
}

export default NavbarToggler;
