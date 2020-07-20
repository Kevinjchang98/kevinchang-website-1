import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Photo from './Components/Photo/Photo';
import Contact from './Components/Contact/Contact';

function App() {
	return (
		<Router>
			<ParallaxProvider>
				<Header />
				<Switch>
					<Route path="/" exact>
						<Landing />
						<Contact />
					</Route>

					<Route path="/photo" exact>
						<Photo />
					</Route>

					<Route path="/contact" exact>
						<Contact />
						{/* Consider making this go to landing page but scrolled down instead of a separate page */}
					</Route>
				</Switch>
			</ParallaxProvider>
		</Router>
	);
}

export default App;
