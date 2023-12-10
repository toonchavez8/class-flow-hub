import React, { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import SocialMedia from "../atoms/SocialMedia";
import ThemeToggle from "../themeToggle/ThemeToggle";

// Define the possible theme values
type Theme = "lightTheme" | "darkTheme";

// Define the props interface for the NavBar component
interface NavBarProps {
	// You can extend this interface based on your actual requirements
}

const NavBar: React.FC<NavBarProps> = () => {
	// State for the current theme
	const [currentTheme, setCurrentTheme] = useState<Theme>(getInitialTheme);

	// Effect to update the HTML data-theme attribute when the theme changes
	useEffect(() => {
		document.querySelector("html")?.setAttribute("data-theme", currentTheme);
	}, [currentTheme]);

	// Function to get the initial theme from the HTML data-theme attribute
	function getInitialTheme(): Theme {
		const htmlElement = document.querySelector("html");
		return (htmlElement?.getAttribute("data-theme") as Theme) || "lightTheme";
	}

	// Handler function for theme changes
	const handleThemeChange = (newTheme: Theme) => {
		setCurrentTheme(newTheme);
	};

	// Define the logo file based on the theme
	const logoFile =
		currentTheme === "darkTheme" ? "Logo-white.svg" : "Logo-darkBlue.svg";

	return (
		<nav className="w-full absolute  top-0 left-0  px-4 md:px-16 py-3 z-50 overflow-hidden">
			<header className="flex justify-between items-center">
				<img src={`/${logoFile}`} alt="logo" className="" />
				<ul className="items-center geist font-thin max-w-2xl hidden md:flex justify-around w-full  text-xl capitalize ">
					<li className="py-2 px-4 text-primary font-thin btn  rounded bg-transparent border-none text-xl transition-all ease cursor-pointer ">
						Learn
					</li>
					<li className="py-2 px-4  btn font-thin text-primary  rounded bg-transparent border-none text-xl transition-all ease cursor-pointer ">
						hub
					</li>
				</ul>
				<div className="drawer drawer-end w-fit">
					<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content">
						{/* Page content here */}
						<label htmlFor="my-drawer-4" className="drawer-button ">
							<RiMenu4Fill className="w-7 h-7 md:w-9 md:h-9 cursor-pointer btn btn-primary hover:fill-white  p-1 hover:bg-primary hover:backdrop-blur-sm hover:bg-opacity-5 hover:scale-105 hover:animate-pulse" />
						</label>
					</div>
					<div className="drawer-side overflow-hidden">
						<label
							htmlFor="my-drawer-4"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul className="menu p-4 w-80 min-h-full bg-base-100 bg-opacity-5 backdrop-blur-sm text-base-content border-l border-opacity-25 border-primary flex flex-col h-full capitalize ">
							<li className="py-2 px-4  md:hidden hover:bg-[#050d33] font-thin btn rounded bg-transparent border-none text-xl transition-all ease cursor-pointer ">
								Learn
							</li>
							<li className="py-2 px-4  md:hidden hover:bg-[#050d33] btn font-thin rounded bg-transparent border-none text-xl transition-all ease cursor-pointer ">
								hub
							</li>
							<ThemeToggle onThemeChange={handleThemeChange} />
							<SocialMedia />
						</ul>
					</div>
				</div>
			</header>
		</nav>
	);
};

export default NavBar;
