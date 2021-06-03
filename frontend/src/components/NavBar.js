import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

export default function NavBar() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const dispatch = useDispatch();
	const signoutHandler = () => {
		dispatch(signout());
	};

	return (
		<div className='row'>
			<div>
				<Link className='brand' to='/'>
					<img src={logo} alt='Logo' className='logo' />
				</Link>
			</div>

			<div>
				<Link to='/cart' className='nav-item'>
					Wishlist
					{cartItems.length > 0 && (
						<span className='badge'>{cartItems.length}</span>
					)}
				</Link>

				{userInfo ? (
					<div className='dropdown '>
						<Link to='#'>
							{userInfo.name} <i className='fa fa-caret-down'></i>{" "}
						</Link>
						<ul className='dropdown-content'>
							<li>
								<Link to='/orderhistory'>My Orders</Link>
							</li>
							<li>
								<Link to='/profile'>User Profile</Link>
							</li>
							<li>
								<Link to='#signout' onClick={signoutHandler}>
									Sign Out
								</Link>
							</li>
						</ul>
					</div>
				) : (
					<div className='dropdown'>
						<Link to='/register' className='nav-item'>
							Register
						</Link>
						<Link to='/signin' className='nav-item'>
							Signin
						</Link>
					</div>
				)}
				{userInfo && userInfo.isSeller && (
					<div className='dropdown'>
						<Link to='#admin'>
							Seller <i className='fa fa-caret-down'></i>
						</Link>
						<ul className='dropdown-content'>
							<li>
								<Link to='/productlist/seller'>Products</Link>
							</li>
							<li>
								<Link to='/orderlist/seller'>Orders</Link>
							</li>
						</ul>
					</div>
				)}
				{userInfo && userInfo.isAdmin && (
					<div className='dropdown'>
						<Link to='#admin'>
							Admin <i className='fa fa-caret-down'></i>
						</Link>
						<ul className='dropdown-content'>
							<li>
								<Link to='/dashboard'>Dashboard</Link>
							</li>
							<li>
								<Link to='/productlist'>Products</Link>
							</li>
							<li>
								<Link to='/orderlist'>Orders</Link>
							</li>
							<li>
								<Link to='/userlist'>Users</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
