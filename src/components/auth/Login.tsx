import React, { useContext } from "react";

import { useMutation } from '@apollo/react-hooks';

//Login form component
const Login: React.FC = () => {
	return (
		<form action="">
			<input type="text" name="test" id="test" />
			<input type="submit" value="Login" />
		</form>
	)
}

export default Login;