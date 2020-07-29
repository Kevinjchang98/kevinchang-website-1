import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Photo from './Components/Photo/Photo';
import Contact from './Components/Contact/Contact';
import PhotoProject from './Components/Photo/PhotoProject/PhotoProject';
import VideoProject from './Components/Photo/VideoProject/VideoProject';
import Coding from './Components/Coding/Coding';
import About from './Components/About/About';
import PersonalWebsite from './Components/Coding/IndividualProjects/PersonalWebsite/PersonalWebsite';
import LoLStats from './Components/Coding/IndividualProjects/LoLStats/LoLStats';
import Phys from './Components/Coding/IndividualProjects/Phys/Phys';

import { photosErika } from './images/photoProjects/erika-portraits/photos';
import { photosBlueAngels } from './images/photoProjects/blue-angels/photos';
import { photosDaily } from './images/photoProjects/nikonf3test/photos';

function App() {
	return (
		<Router>
			<ParallaxProvider>
				<Switch>
					<Route path="/" exact>
						<Header />
						<Landing />
					</Route>

					<Route path="/photo" exact>
						<Header />
						<Photo />
					</Route>

					<Route path="/photo/erika" onChange={'changed'} exact>
						<Header />
						<PhotoProject photos={photosErika} title="Erika Portraits" />
					</Route>

					<Route path="/photo/blueangels" exact>
						<Header />
						<PhotoProject photos={photosBlueAngels} title="Blue Angels" />
					</Route>

					<Route path="/photo/thedaily" exact>
						<Header />
						<PhotoProject photos={photosDaily} title="The Daily Test Shots" />
					</Route>

					<Route path="/photo/cherryblossom" exact>
						<Header />
						<VideoProject
							title="Cherry Blossom Festival" //
							url="https://vimeo.com/266251749"
						/>
					</Route>

					<Route path="/photo/nanjing" exact>
						<Header />
						<VideoProject
							title="This is Nanjing" //
							url="https://vimeo.com/229436315"
						/>
					</Route>

					<Route path="/programming" exact>
						<Header />
						<Coding />
					</Route>

					<Route path="/programming/personalwebsite" exact>
						<Header />
						<PersonalWebsite />
					</Route>

					<Route path="/programming/lolstats" exact>
						<Header />
						<LoLStats siteLink="" githubLink="" />
					</Route>

					<Route path="/programming/phys" exact>
						<Header />
						<Phys />
					</Route>

					<Route path="/about" exact>
						<Header />
						<About />
					</Route>

					<Route path="/contact" exact>
						<Header />
						<Contact />
						{/* Consider making this go to landing page but scrolled down instead of a separate page */}
					</Route>
				</Switch>
			</ParallaxProvider>
		</Router>
	);
}

export default App;
