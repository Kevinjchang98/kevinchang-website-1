import React from 'react';

import style from './Coding.module.css';
import MenuItem from './MenuItem/MenuItem';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

function Coding() {
	return (
		<FadeIn>
			<div className={style.codingContainer}>
				<div className={style.menuContainer}>
					<h1 className={style.title}>Projects</h1>
					<FadeIn>
						<Link to="/programming/schedulemaster">
							<MenuItem
								title="Schedulemaster Dashboard"
								date="Spring, 2022"
								lang="NextJS, D3.js, NoSQL, TypeScript"
								githubLink="https://github.com/Kevinjchang98/schedulemaster_dashboard"
							/>
						</Link>

						<Link to="/programming/xrayclassifier">
							<MenuItem
								title="Pneumonia Xray Classifier"
								date="Fall, 2020"
								lang="Python, Scikit-Learn, Flask, React"
								githubLink="https://github.com/Kevinjchang98/pneumonia-ml-flask"
							/>
						</Link>

						<Link to="/programming/lolstatsreact">
							<MenuItem
								title="LoL Stats in React and D3"
								date="Summer, 2020"
								lang="R, ReactJS, D3"
								githubLink="https://github.com/Kevinjchang98/lol-stats-vis"
							/>
						</Link>

						<Link to="/programming/lolflowers">
							<MenuItem
								title="LoL Flowers"
								date="Summer, 2020"
								lang="R, ReactJS, D3"
								githubLink="https://github.com/Kevinjchang98/lol-stats-flowers"
							/>
						</Link>

						{/* <Link to="/programming/personalwebsite">
							<MenuItem
								title="kevinchang.com"
								date="July, 2020"
								lang="ReactJS"
								githubLink="https://github.com/Kevinjchang98/kevinchang-website"
							/>
						</Link> */}

						<Link to="/programming/lolstats">
							<MenuItem
								title="LoL Stats in R Shiny"
								date="Spring, 2020"
								lang="R"
								githubLink="https://github.com/Kevinjchang98/INFO201-League-Stats"
							/>
						</Link>

						<Link to="/programming/phys">
							<MenuItem
								title="Various Physics Labs"
								date="Spring, 2020"
								lang="Matlab, LaTeX"
								githubLink="https://github.com/Kevinjchang98/PHYS432"
							/>
						</Link>
					</FadeIn>
				</div>
			</div>
		</FadeIn>
	);
}

export default Coding;
