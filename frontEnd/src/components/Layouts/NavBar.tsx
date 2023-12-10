import { RiMenu4Fill } from "react-icons/ri";

const NavBar = () => {
	return (
		<nav className="w-full absolute  top-0 left-0  px-4 md:px-16 py-3 z-50 ">
			<header className="flex justify-between items-center">
				<img src="/Logo-white.svg" alt="logo" className="" />
				<RiMenu4Fill className="w-7 h-7 md:w-9 md:h-9 cursor-pointer btn fill-white bg-transparent p-1 hover:bg-[#050c29]" />
			</header>
		</nav>
	);
};

export default NavBar;
