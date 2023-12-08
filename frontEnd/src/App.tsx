import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg"; // Make sure to update the path
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState("");

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://class-flow-hub-production.up.railway.app/"
			);
			const data = await response.json();
			setMessage(data.message); // Assuming the response has a property called "message"
		} catch (error) {
			console.error("Error fetching data:", error);
			setMessage("Error fetching data");
		}
	};

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					Count is {count}
				</button>
				<button onClick={fetchData}>Fetch Data</button>
				{message && <p>{message}</p>}
				<p>
					Test <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
