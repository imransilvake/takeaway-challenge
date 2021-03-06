// react
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import Redirect from 'react-router-dom/es/Redirect';

// app
import ENV from './environment';
import Home from './app/scenes/Home';
import Game from './app/scenes/Game';
import Logs from './app/scenes/Logs';

class AppRouter extends Component {
	render() {
		return (
			<Switch>
				<Route exact path={ENV.ROUTING.HOME} component={Home}/>
				<Route exact path={ENV.ROUTING.LOGS} component={Logs}/>
				<Route
					path={ENV.ROUTING.HOME}
					render={props => (
						this.props.gameState.start
							? (<Game {...props} gameState={this.props.gameState}/>) : (<Redirect to={ENV.ROUTING.HOME}/>)
					)}/>
			</Switch>
		);
	}
}

// props
const mapStateToProps = state => ({
	gameState: state.game
});

export default withRouter(connect(mapStateToProps)(AppRouter))
