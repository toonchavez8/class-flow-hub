import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EmailForm = () => {
	// State to track the form submission status
	const [submitStatus, setSubmitStatus] = useState<
		"default" | "success" | "fail"
	>("default");

	// State to store error message
	const [errorMessage, setErrorMessage] = useState<string>("");

	// Form validation schema
	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid email format").required("Required"),
	});

	// Formik form handling
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			try {
				// Make API request to subscribe
				const response = await fetch(
					`${import.meta.env.VITE_API_ENDPOINT}/api/subscribe`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(values),
					}
				);

				if (response.ok) {
					// Handle successful response
					setSubmitStatus("success");
				} else {
					// Handle error response
					const data = await response.json();

					// Set error message
					setErrorMessage(
						data.message || "Failed to subscribe. Please try again later."
					);

					// Set submission status to fail
					setSubmitStatus("fail");
				}
			} catch (error) {
				// Log error and set submission status to fail
				console.error("Error making API request", error);
				setSubmitStatus("fail");
				setErrorMessage("Failed to subscribe. Please try again later.");
			}
		},
	});

	return (
		<form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
			{/* Email input field */}
			<label
				className={`form-control w-full  ${
					formik.touched.email && formik.errors.email ? "input-error" : ""
				}`}
			>
				<div className="label">
					<span className={"label-text text-xs md:text-lg"}>
						{/* Display error message if submission fails */}
						{submitStatus === "fail" ? (
							<span className="badge badge-error">{errorMessage}</span>
						) : (
							"What is your email?"
						)}
					</span>
				</div>
				{/* Email input */}
				<input
					type="email"
					placeholder="placeholder@email.com"
					className={`input input-bordered w-full ${
						formik.touched.email && formik.errors.email ? "input-error" : ""
					}`}
					{...formik.getFieldProps("email")}
					disabled={submitStatus === "success"}
				/>
			</label>
			{/* Submit button or success message */}
			{submitStatus === "success" ? (
				<button
					className="btn disabled:btn-success disabled:bg-success disabled:opacity-80 disabled:text-primary"
					disabled
				>
					Email sent successfully!
				</button>
			) : (
				<button type="submit" className="btn btn-accent mb-48">
					Sign Up
				</button>
			)}
		</form>
	);
};

export default EmailForm;
