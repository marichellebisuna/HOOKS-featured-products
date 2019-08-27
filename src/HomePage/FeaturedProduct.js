import React from 'react';
import Product from '../components/Product';
import { ProductConsumer } from '../context/context';
//import { Link } from 'react-router-dom';

export default function FeaturedProduct() {
	return (
		<section className="py-5">
			<div className="container">
				<h1>Featured Products</h1>
				<div className="row my-5">
					<ProductConsumer>
						{(value) => {
							const { featuredProducts } = value;

							return featuredProducts.map((product) => {
								return <Product key={product.id} product={product} />;
							});
						}}
					</ProductConsumer>
				</div>
				{/* <div className="row mt-5">
					<div className="col text-center">
						<Link to="/products" className="main-link">
							our products
						</Link>
					</div>
				</div> */}
			</div>
		</section>
	);
}
