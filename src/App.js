import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import { routes } from './routes';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <Switch>
                        {this.showContentMenus(routes)}
                    </Switch>
                </div>
            </Router>
        )
    }

    showContentMenus = (routes) => {
        let result = null;
        if (routes.length > 0) {
            return (
                result = routes.map((route, index) => {
                    return <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                })
            )
        }
        return result
    }
}
