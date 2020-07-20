import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Photo from './Components/Photo/Photo';
import Contact from './Components/Contact/Contact';
import PhotoProject from './Components/Photo/PhotoProject/PhotoProject';
import VideoProject from './Components/Photo/VideoProject/VideoProject';

function App() {
	return (
		<Router>
			<ParallaxProvider>
				<Header />
				<Switch>
					<Route path="/" exact>
						<Landing />
					</Route>

					<Route path="/photo" exact>
						<Photo />
					</Route>

					<Route path="/photo/erika" exact>
						<PhotoProject />
					</Route>

					<Route path="/photo/cherryblossom" exact>
						<VideoProject
							title="Cherry Blossom Festival" //
							url="https://vimeo.com/266251749"
						/>
					</Route>

					<Route path="/photo/nanjing" exact>
						<VideoProject
							title="This is Nanjing" //
							url="https://vimeo.com/229436315"
						/>
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
