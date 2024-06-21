// Function to check if email is valid based on regex
export default function isValidEmailFormat(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
