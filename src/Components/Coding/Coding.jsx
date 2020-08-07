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
						<Link to="/programming/lolflowers">
							<MenuItem
								title="LoL Flowers"
								date="Summer, 2020"
								lang="R, ReactJS, D3"
								githubLink="https://github.com/Kevinjchang98/lol-stats-flowers"
							/>
						</Link>

						<Link to="/programming/personalwebsite">
							<MenuItem
								title="kevinchang.com"
								date="July, 2020"
								lang="ReactJS"
								githubLink="https://github.com/Kevinjchang98/kevinchang-website"
							/>
						</Link>

						<Link to="/programming/lolstats">
							<MenuItem
								title="LoL Stats"
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
