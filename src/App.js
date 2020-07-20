import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Photo from './Components/Photo/Photo';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Landing />
				</Route>

				<Route path="/photo">
					<Photo />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
