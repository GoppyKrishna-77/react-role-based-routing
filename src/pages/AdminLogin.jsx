import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const AdminLogin = () => {
	const { setAuth } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/admin-db";

	const emailRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [email, pwd]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const roles = [2]; //Admin
		if (pwd === "123") {
			console.log({ email, pwd, roles });
			setAuth({ email: email, pwd: pwd, roles: roles });
			setEmail("");
			setPwd("");
			navigate(from, { replace: true });
		} else {
			setErrMsg("Login Failed");
			errRef.current.focus();
		}
	};

	return (
		<section>
			<p ref={errRef} aria-live="assertive">
				{errMsg}
			</p>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username:</label>
				<input
					type="email"
					id="email"
					ref={emailRef}
					autoComplete="off"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>

				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					onChange={(e) => setPwd(e.target.value)}
					value={pwd}
					required
				/>
				<button>Sign In</button>
			</form>
		</section>
	);
};

export default AdminLogin;
