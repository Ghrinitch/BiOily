import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen(props) {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;
	if (!shippingAddress.address) {
		props.history.push("/shipping");
	}
	const [paymentMethod, setPaymentMethod] = useState("Poste");
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		props.history.push("/placeorder");
	};
	return (
		<div>
			<CheckoutSteps step1 step2 step3></CheckoutSteps>
			<form className='form' onSubmit={submitHandler}>
				<ul className='form-container'>
					<li>
						<h1>Payment Method</h1>
					</li>
					<li>
						<div>
							<input
								type='radio'
								id='poste'
								value='Poste'
								name='paymentMethod'
								required
								checked
								onChange={(e) => setPaymentMethod(e.target.value)}
							></input>
							<label htmlFor='poste'>Poste</label>
						</div>
					</li>
					<li>
						<div>
							<input
								type='radio'
								id='banque'
								value='Banque'
								name='paymentMethod'
								required
								onChange={(e) => setPaymentMethod(e.target.value)}
							></input>
							<label htmlFor='banque'>Banque</label>
						</div>
					</li>
					<li>
						<label />
						<button className='primary' type='submit' className='button small'>
							Continue
						</button>
					</li>
				</ul>
			</form>
		</div>
	);
}
