import { useState } from "react";

const EmailForm = () => {
	const [email, setEmail] = useState<string>("");
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
	const [submitStatus, setSubmitStatus] = useState<
		"default" | "success" | "fail"
	>("default");
	const [errorMessage, setErrorMessage] = useState<string>("");

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newEmail = event.target.value;
		setEmail(newEmail);
		setIsEmailValid(validateEmail(newEmail));
	};

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (validateEmail(email)) {
			try {
				const response = await fetch("/api/subscribe", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email }),
				});

				if (response.ok) {
					// Handle successful response
					setSubmitStatus("success");
				} else {
					// Handle error response
					const data = await response.text();

					console.error("Error response status:", response.status);
					console.error("Error message from server:", data);

					setErrorMessage(
						data || "Failed to subscribe. Please try again later."
					);
					setSubmitStatus("fail");
				}
			} catch (error) {
				console.error("Error making API request", error);
				setSubmitStatus("fail");
				setErrorMessage("Failed to subscribe. Please try again later.");
			}
		} else {
			// Handle invalid email
			setIsEmailValid(false);
			setSubmitStatus("default");
		}
	};
	const validateEmail = (input: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(input);
	};

	return (
		<form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
			<label
				className={`form-control w-full  ${isEmailValid ? "" : "input-error"}`}
			>
				<div className="label">
					<span className={"label-text text-xs md:text-lg"}>
						{submitStatus === "fail" ? (
							<span className="badge badge-error">{errorMessage}</span>
						) : (
							"What is your email?"
						)}
					</span>
				</div>
				<input
					type="email"
					placeholder="placeholder@email.com"
					className={`input input-bordered w-full ${
						submitStatus === "fail" ? "input-error" : ""
					}`}
					value={email}
					name="email"
					onChange={handleEmailChange}
					disabled={submitStatus === "success"}
				/>
			</label>
			{submitStatus === "success" ? (
				<p className="text-green-500">Email sent successfully!</p>
			) : (
				<button type="submit" className="btn btn-accent mb-48">
					Sign Up
				</button>
			)}
		</form>
	);
};

export default EmailForm;
