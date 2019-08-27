import React, { Component } from 'react';
import { items } from '../data/productData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		cartItems: 0,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0,
		storeProducts: [],
		filteredProducts: [],
		featuredProducts: [],
		singleProduct: {},
		loading: false
	};

	componentDidMount() {
		//from contentful items

		this.setProducts(items);
	}

	//set products

	setProducts = (products) => {
		let storeProducts = products.map((item) => {
			const { id } = item.sys;
			// const image = item.fields.image.map((image) => {
			// 	image.fields.file.url;
			// });
			const image = item.fields.image.fields.file.url;
			const product = { id, ...item.fields, image };
			return product;
		});
		//featured products
		let featuredProducts = storeProducts.filter((item) => item.featured === true);

		this.setState({
			storeProducts,
			filteredProducts: storeProducts,
			featuredProducts,
			cart: this.getStorageCart(),
			singleProduct: this.getStorageProduct(),
			loading: false
		});
	};
	//get cart from local storage
	getStorageCart = () => {
		return [];
	};
	//get product from local storage
	getStorageProduct = () => {
		return {};
	};
	//get totals
	getTotals = () => {};
	//add totals
	addTotals = () => {};
	//sunc storage
	syncStorage = () => {};
	//add to cart
	addToCart = (id) => {
		console.log(`add to cart ${id}`);
	};
	//set single product
	setSingleProduct = (id) => {
		console.log(`set single product ${id}`);
	};

	render() {
		return (
			<ProductContext.Provider
				value={{ ...this.state, addToCart: this.addToCart, setSingleProduct: this.setSingleProduct }}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductProvider, ProductConsumer };
