import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
	theme?: "lightTheme" | "darkTheme";
	onThemeChange?: (newTheme: "lightTheme" | "darkTheme") => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
	theme: initialTheme = "lightTheme",
	onThemeChange,
}) => {
	const [theme, setTheme] = useState(initialTheme);

	const toggleTheme = () => {
		const newTheme = theme === "darkTheme" ? "lightTheme" : "darkTheme";
		setTheme(newTheme);

		// Call the onThemeChange prop if it is provided
		if (onThemeChange) {
			onThemeChange(newTheme);
		}
	};

	// initially set the theme and "listen" for changes to apply them to the HTML tag
	useEffect(() => {
		document.querySelector("html")?.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<div className="mt-auto flex gap-6 items-center">
			<button
				className="focus:outline-none flex w-full h-10 justify-around items-center px-10 rounded-full btn-primary text-lg"
				onClick={toggleTheme}
			>
				<FaSun />
				<span
					className={`border flex items-center cursor-pointer w-1/3 transition-all duration-300 ease rounded-full ${
						theme === "lightTheme" ? "justify-start bg-base-100" : "justify-end"
					}`}
					data-toggle-theme={
						theme === "lightTheme" ? "darkTheme" : "lightTheme"
					}
				>
					<span className={`rounded-full w-3 h-3 m-1 bg-primary`}></span>
				</span>
				<FaMoon />
			</button>
		</div>
	);
};

export default ThemeToggle;
