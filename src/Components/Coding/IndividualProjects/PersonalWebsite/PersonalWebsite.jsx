import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

function PersonalWebsite() {
	return (
		<div className={style.projectContainer}>
			<FadeIn className={style.contentContainer}>
				<h1 className={style.projectTitle}>Personal Portfolio Website</h1>

				<NavFooter siteLink="" githubLink="https://github.com/Kevinjchang98/kevinchang-website" />

				<div className={style.descriptionContainer}>
					<div className={style.descriptionList}>
						<p className={style.descriptionListItem}>Purpose: Personal</p>
						<p className={style.descriptionListItem}>Project Type: React.js</p>
						<p className={style.descriptionListItem}>Date: July, 2020</p>
					</div>
					<div className={style.descriptionParagraph}>
						<p>
							A personal portfolio website using React.js. Simple and largely monochromatic with a focus
							on ease of use and readability.
						</p>
					</div>
				</div>

				<h2 className={style.subheading}>Page Design and Layout</h2>

				<p>
					With personal projects spanning widely different genres such as photography projects to web design,
					the initial landing page discretely separates out section of the site.
				</p>

				<p>
					The coding section is a list of projects with the name, as well as date and languages used, giving a
					timeline and quick look at the types of projects I've been working on recently. Clicking on the
					languages or date is a direct link to the relevant Github repository, while clicking on the title
					brings one to this page, where a detailed writeup is provided, giving commentary on the project.
				</p>

				<h2 className={style.subheading}>User Experience</h2>

				<p>
					While incorporating relatively common elements to modern portfolio websites such as parallax effects
					on scroll in the photography section, many other common elements are purposefully left out. For
					example, inertial scrolling that differs from the native scroll behavior of the OS, custom scroll
					bars, custom mouse cursors, etc. are left out to avoid giving users a different browsing experience
					on this site compared to any other website they may be browsing. Animations are also fast enough to
					prevent viewers from waiting for animations when clicking through the site.
				</p>
			</FadeIn>
		</div>
	);
}

export default PersonalWebsite;
