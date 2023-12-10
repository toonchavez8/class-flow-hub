import { RiMenu4Fill } from "react-icons/ri";
import SocialMedia from "../atoms/SocialMedia";

const NavBar = () => {
	return (
		<nav className="w-full absolute  top-0 left-0  px-4 md:px-16 py-3 z-50 overflow-hidden">
			<header className="flex justify-between items-center">
				<img src="/Logo-white.svg" alt="logo" className="" />
				<ul className="items-center geist font-thin max-w-2xl hidden md:flex justify-around w-full  text-xl capitalize text-white">
					<li className="py-2 px-4  hover:bg-[#050d33] font-thin btn rounded bg-transparent border-none text-xl transition-all ease cursor-pointer ">
						Learn
					</li>
					<li className="py-2 px-4  hover:bg-[#050d33] btn font-thin rounded bg-transparent border-none text-xl transition-all ease cursor-pointer ">
						hub
					</li>
				</ul>
				<div className="drawer drawer-end w-fit">
					<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content">
						{/* Page content here */}
						<label htmlFor="my-drawer-4" className="drawer-button ">
							<RiMenu4Fill className="w-7 h-7 md:w-9 md:h-9 cursor-pointer btn fill-white bg-transparent p-1 hover:bg-[#050c29] hover:backdrop-blur-sm hover:bg-opacity-5 hover:scale-105 hover:animate-pulse" />
						</label>
					</div>
					<div className="drawer-side overflow-hidden">
						<label
							htmlFor="my-drawer-4"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul className="menu p-4 w-80 min-h-full bg-[#2c3355] bg-opacity-5 backdrop-blur-sm text-base-content border-l border-opacity-25 border-gray-500 flex flex-col h-full capitalize ">
							<li className="py-2 px-4  md:hidden hover:bg-[#050d33] font-thin btn rounded bg-transparent border-none text-xl transition-all ease cursor-pointer ">
								Learn
							</li>
							<li className="py-2 px-4  md:hidden hover:bg-[#050d33] btn font-thin rounded bg-transparent border-none text-xl transition-all ease cursor-pointer ">
								hub
							</li>
							<SocialMedia />
						</ul>
					</div>
				</div>
			</header>
		</nav>
	);
};

export default NavBar;
