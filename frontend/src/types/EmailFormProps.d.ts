export interface EmailFormProps {
	email: string;
	isEmailValid: boolean;
	submitStatus: "default" | "success" | "fail";
	errorMessage: string;
	handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
	validateEmail: (input: string) => boolean;
}
