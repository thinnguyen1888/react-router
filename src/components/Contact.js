import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export default class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isCheck: true
		}
	}
	onClick = (isCheck) => {
		this.setState({
			isCheck: isCheck
		})
	}

	render() {
		return (
			<div>
				Đây là trang liên hệ

				<button type="button" class="btn btn-default" onClick={() => this.onClick(false)}>Cho phép</button>
				<button type="button" class="btn btn-default" onClick={() => this.onClick(true)}>Không cho phép</button>
				<Prompt
					when={true}
					message={location => (`Bạn muốn đi đến${location.pathname}`)}
				/>
			</div>
		)
	}
}

