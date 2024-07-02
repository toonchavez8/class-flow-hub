// EmailForm.tsx
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import { Resend } from "resend";
import { WaitlistEmail } from "@repo/transactionals";
import { Send } from "../../../../packages/transactionals/.react-email/src/components/send";

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

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
					alert("creating email");
					setSubmitStatus("success");
					// Send resend email to the user confirmation email
					const { data, error } = await resend.emails.send({
						from: "toonchavez8@gmail.com",
						to: values.email,
						subject: "Confirm your subscription",
						react: <WaitlistEmail name={values.email} />,
					});

					if (error) {
						return alert("error");
					}

					console.log("data", data);

					alert("email sent");

					// Handle successful response
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

	// Extracted statement for error or success message
	let message;
	if (submitStatus === "fail") {
		message = errorMessage;
	} else if (submitStatus === "success") {
		message = "We'll be in touch!";
	} else {
		message = "What is your email?";
	}

	// Extracted styles and classes based on submitStatus
	const labelClass = `text-xs md:text-lg ${
		submitStatus === "fail" ? "badge badge-error md:badge-lg" : "label-text"
	}`;

	const getEmailInputClass = () => {
		return classNames(
			"input",
			"input-bordered",
			"w-full",
			submitStatus === "success" && "disabled:input-success",
			formik.touched.email && formik.errors.email && "input-error",
			submitStatus === "fail" && "input-error"
		);
	};

	return (
		<form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
			{/* Email input field */}
			<label
				className={`form-control w-full ${
					formik.touched.email && formik.errors.email ? "input-error" : ""
				}`}
			>
				<div className="label">
					{/* Display error or success message based on submit status */}
					<span className={labelClass}>{message}</span>
				</div>
				{/* Email input */}
				<input
					type="email"
					placeholder="placeholder@email.com"
					className={getEmailInputClass()}
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
				<button type="submit" className="mb-48 btn btn-accent">
					Sign Up
				</button>
			)}
		</form>
	);
};

export default EmailForm;
