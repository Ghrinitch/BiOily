import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function ProductsScreen(props) {
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const productDetails = useSelector((state) => state.productDetails);
	const [qty, setQty] = useState(1);
	const { loading, error, product } = productDetails;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	useEffect(() => {
		dispatch(detailsProduct(productId));
	}, [dispatch, productId]);

	const addToCartHandler = () => {
		props.history.push(`/cart/${productId}?qty=${qty}`);
	};

	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant='danger'>{error}</MessageBox>
			) : (
				<div>
					<Link to='/' className='back'>
						{" "}
						&lt;Back to results
					</Link>
					<div className='row top'>
						<div className='col-2'>
							<img
								className='large'
								src={product.image}
								alt={product.name}
							></img>
						</div>
						<div className='col-1'>
							<ul>
								<li>
									<h1>{product.name}</h1>
								</li>
								<li>
									<div className='description'>Description:</div>
									<p>{product.description}</p>
								</li>
							</ul>
						</div>
						<div className='col-3'>
							<div className='card card-body'>
								<ul>
									<li>
										{userInfo ? (
											<div>
												<h2>Contact Seller:</h2>
												<div>
													<Link to={`/seller/${product.seller._id}`}>
														{product.seller.seller.name}
													</Link>
												</div>
											</div>
										) : (
											<div>
												<h2>Contact Seller:</h2>
												<Link to={`/signin`}>Sign In</Link> To view Seller Info
											</div>
										)}
									</li>
									<li>
										<div className='row'>
											<div>Price</div>
											<div className='price'>${product.price}</div>
										</div>
									</li>
									<li>
										<div className='row'>
											<div>Status</div>
											<div>
												{product.countInStock > 0 ? (
													<span className='success'>In Stock</span>
												) : (
													<span className='danger'>Unavailable</span>
												)}
											</div>
										</div>
									</li>
									{product.countInStock > 0 && (
										<>
											<li>
												<div className='row'>
													<div>Qty</div>
													<div>
														<select
															value={qty}
															onChange={(e) => setQty(e.target.value)}
														>
															{[...Array(product.countInStock).keys()].map(
																(x) => (
																	<option key={x + 1} value={x + 1}>
																		{x + 1}
																	</option>
																)
															)}
														</select>
													</div>
												</div>
											</li>

											<li>
												<button
													onClick={addToCartHandler}
													className='button primary block'
												>
													Add to Wishlist
												</button>
											</li>
										</>
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
