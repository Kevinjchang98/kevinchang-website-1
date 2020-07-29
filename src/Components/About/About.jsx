import React from 'react';
import Contact from '../Contact/Contact';

import style from './About.module.css';
import FadeIn from 'react-fade-in';

function About() {
	return (
		<FadeIn>
			<Contact />
		</FadeIn>
	);
}

export default About;
