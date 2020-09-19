import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
	{
		name: 'Trang chủ',
		to: '/',
		exact: true,
	},
	{
		name: 'Giới thiệu',
		to: '/about',
		exact: true,
	},
	{
		name: 'Liên hệ',
		to: '/contact',
		exact: true,
	},
	{
		name: 'Sản phẩm',
		to: '/products',
		exact: true,
	},
	{
		name: 'Đăng nhập',
		to: '/login',
		exact: true,
	},
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
			let active = match ? 'active abc' : '';
			return (
				<li className={`my-li ${active}`}>
					<Link to={to} className='my-link' >
						{label}
					</Link>
				</li>
			)
		}} />
	)
}

export default class Menu extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse">
				<ul className="nav navbar-nav">
					{this.showMenu(menus)}
				</ul>
			</nav>
		)
	}

	showMenu = (menus) => {
		let result = null;
		if (menus.length > 0) {
			return (
				result = menus.map((menu, index) => {
					return <MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeOnlyWhenExact={menu.exact} />
				})
			)
		}
		return result
	}
}

