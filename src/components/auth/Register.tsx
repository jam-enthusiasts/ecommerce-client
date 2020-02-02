import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { useMutation } from '@apollo/react-hooks';


type FormData = {
	firstName: string;
	lastName: string;
};

//Register form component
const Register = () => {
	const { register, setValue, handleSubmit, errors } = useForm<FormData>();
	const onSubmit = handleSubmit(({ firstName, lastName }) => {
		console.log(firstName, lastName);
	}); // firstName and lastName will have correct type

	return (
		<form onSubmit={onSubmit}>
			<label>First Name</label>
			<input name="firstName" ref={register} />
			<label>Last Name</label>
			<input name="lastName" ref={register} />

			<input type="submit" value="Submit" />
		</form>
	);
}

export default Register;