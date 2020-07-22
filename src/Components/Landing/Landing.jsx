import React from 'react';
import { Link } from 'react-router-dom';

import style from './Landing.module.css';
import FadeIn from 'react-fade-in';

function Landing() {
	return (
		<FadeIn>
			<div className={style.landingContainer}>
				<div className={style.landingItems}>
					<Link to="/music">
						<p className={style.linkText}>Music</p>
					</Link>

					<Link to="/programming">
						<p className={style.linkText}>Coding</p>
					</Link>

					<Link to="photo">
						<p className={style.linkText}>Photo & Video</p>
					</Link>
				</div>
			</div>
		</FadeIn>
	);
}

export default Landing;
