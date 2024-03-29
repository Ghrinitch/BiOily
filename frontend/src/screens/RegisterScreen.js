import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isSeller, setIsSeller] = useState("");

	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/";

	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo, loading, error } = userRegister;

	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Password and confirm password are not match");
		} else {
			dispatch(register(name, email, password));
		}
	};
	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, userInfo]);
	return (
		<div>
			<form className='form' onSubmit={submitHandler}>
				<ul className='form-container'>
					<li>
						<h1>Create Account</h1>
					</li>
					{loading && <LoadingBox></LoadingBox>}
					{error && <MessageBox variant='danger'>{error}</MessageBox>}
					<li>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							placeholder='Enter name'
							required
							onChange={(e) => setName(e.target.value)}
						></input>
					</li>
					<li>
						<label htmlFor='email'>Email address</label>
						<input
							type='email'
							id='email'
							placeholder='Enter email'
							required
							onChange={(e) => setEmail(e.target.value)}
						></input>
					</li>
					<li>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							placeholder='Enter password'
							required
							onChange={(e) => setPassword(e.target.value)}
						></input>
					</li>
					<li>
						<label htmlFor='confirmPassword'>Confirm Password</label>
						<input
							type='password'
							id='confirmPassword'
							placeholder='Enter confirm password'
							required
							onChange={(e) => setConfirmPassword(e.target.value)}
						></input>
					</li>
					<li>
						<button className='button primary' type='submit'>
							Register
						</button>
					</li>
					<li>
						<label>Already have an account? </label>
						<li>
							<Link
								to={`/signin?redirect=${redirect}`}
								className='button primary center'
							>
								Sign-In
							</Link>
						</li>
					</li>
				</ul>
			</form>
		</div>
	);
}
