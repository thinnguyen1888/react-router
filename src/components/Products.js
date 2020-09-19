import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

export default class Products extends Component {
	render() {
		let products = [
			{
				id: 1,
				slug: 'iphone',
				name: 'Iphone 11',
				price: 400
			},
			{
				id: 2,
				slug: 'samsung',
				name: 'Samsung Galaxy 20',
				price: 500
			},
			{
				id: 3,
				slug: 'oppo',
				name: 'Oppo F1',
				price: 800
			},
		];

		let { match } = this.props;
		let url = match.url;

		let result = products.map((product, index) => {
			return (
				<NavLink to={`${url}/${product.slug}`} key={index}>
					<li className="list-group-item">
						{product.id}-{product.name}-{product.price}$
					</li>
				</NavLink>
			)
		})

		let { location } = this.props;
		console.log(location);

		return (
			<div className='container'>
				<h1>Đây là danh sách sản phẩm</h1>

				<div className="row">

					<ul className="list-group">
						{result}
					</ul>

				</div>
				<div className='row'>
					<Route path='/products/:name' component={Product} />
				</div>

			</div>
		)
	}
}

