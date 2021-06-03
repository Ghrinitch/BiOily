export default function validateInfo(values) {
	let errors = {};

	if (!values.fullName.trim()) {
		errors.username = "Full Name required";
	} else if (!/^[A-Za-z]+/.test(values.name.trim())) {
		errors.name = "Name can only contain letters";
	}
}
