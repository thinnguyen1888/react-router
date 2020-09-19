import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			txtUsername: '',
			txtPassword: '',
		}
	}

	onChange = (e) => {
		let target = e.target;
		let name = target.name;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		})
	}

	onLogin = (e) => {
		e.preventDefault();
		let { txtUsername, txtPassword } = this.state;
		if (txtUsername === 'admin' && txtPassword === 'admin') {
			localStorage.setItem('user', JSON.stringify({
				username: txtUsername,
				password: txtPassword,
			}))
		}
	}

	render() {
		let { txtUsername, txtPassword } = this.state;
		let loggedInUser = localStorage.getItem('user');
		if (loggedInUser !== null) {
			let { location } = this.props;
			return <Redirect to={{
				pathname: '/products',
				state: {
					from: location
				}
			}} />
		}

		return (
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

					<form onSubmit={this.onLogin}>
						<legend>Đăng nhập</legend>

						<div className="form-group">
							<label for="">Username</label>
							<input
								type="text"
								className="form-control"
								name='txtUsername'
								value={txtUsername}
								onChange={this.onChange}
							/>
						</div>
						<div className="form-group">
							<label for="">Password</label>
							<input
								type="text"
								className="form-control"
								name='txtPassword'
								value={txtPassword}
								onChange={this.onChange}
							/>
						</div>
						<button type="submit" className="btn btn-primary">Đăng nhập</button>
					</form>

				</div>
			</div>

		)
	}
}

