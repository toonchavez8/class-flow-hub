import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState("");

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://class-flow-hub-production.up.railway.app/"
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.text();
			setMessage(data); // Assuming the response has a property called "message"
		} catch (error) {
			console.error("Error fetching data:", error);
			setMessage("Error fetching data");
		}
	};

	return (
		<section className="prose lg:prose-xl w-full max-w-2xl mx-auto transition-all duration-500">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<div className="card">
				<button
					onClick={() => setCount((count) => count + 1)}
					className="btn btn-seondary"
				>
					count is {count}
				</button>
				<button onClick={fetchData}>Fetch Data</button>
				{message && <p>{message}</p>}
				<p>
					test <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</section>
	);
}

export default App;
