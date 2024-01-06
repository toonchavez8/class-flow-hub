// Validate email format (example: a simple email format validation)
export default function isValidEmailFormat(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
