import React from 'react';

import style from './Coding.module.css';
import MenuItem from './MenuItem/MenuItem';
import FadeIn from 'react-fade-in';

function Coding() {
	return (
		<FadeIn>
			<div className={style.codingContainer}>
				<div className={style.menuContainer}>
					<h1 className={style.title}>Projects</h1>
					<FadeIn>
						<MenuItem
							title="kevinchang.com"
							date="Jul 20, 2020"
							lang="ReactJS"
							githubLink="https://github.com/Kevinjchang98/kevinchang-website"
						/>

						<MenuItem
							title="LoL Stats"
							date="Jun 8, 2020"
							lang="R"
							githubLink="https://github.com/Kevinjchang98/INFO201-League-Stats"
						/>

						<MenuItem
							title="Various Physics Labs"
							date="Jun 8, 2020"
							lang="Matlab, LaTeX"
							githubLink="https://github.com/Kevinjchang98/PHYS432"
						/>
					</FadeIn>
				</div>
			</div>
		</FadeIn>
	);
}

export default Coding;
