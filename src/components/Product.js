import React, { Component } from 'react'

export default class Product extends Component {
	render() {
		let { match } = this.props;
		let name = match.params.name;
		return (
			<h1>
				Đây là chi tiết sản phẩm : {name}
			</h1>
		)
	}
}

