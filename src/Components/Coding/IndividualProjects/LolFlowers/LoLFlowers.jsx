import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

import flowersImage from '../../../../images/codingProjects/LoLFlowers/flowers.png';

function LoLFlowers() {
	return (
		<div className={style.projectContainer}>
			<FadeIn className={style.contentContainer}>
				<h1 className={style.projectTitle}>LoL Flowers</h1>

				<NavFooter
					siteLink="https://lol-flowers.netlify.app/"
					githubLink="https://github.com/Kevinjchang98/lol-stats-flowers"
				/>

				<div className={style.descriptionContainer}>
					<div className={style.descriptionList}>
						<p className={style.descriptionListItem}>Purpose: Personal</p>
						<p className={style.descriptionListItem}>Project Type: R, React.js, D3</p>
						<p className={style.descriptionListItem}>Date: August, 2020</p>
					</div>
					<div className={style.descriptionParagraph}>
						<p>
							Visualizations of a player's kill/death ratio in their recent League of Legends games.
							Inspired by <a href="https://sxywu.com/filmflowers/">Shirley Wu's Film Flowers</a>.
						</p>
					</div>
				</div>

				<h2 className={style.subheading}>Getting and Cleaning Data</h2>

				<p>
					Utilizing <a href="https://twitter.com/Q3w3e3">q3w3e3's</a> server, an API using Plumber and R was
					set up to handle the requests to the Riot API for match data and details. All formatting of data is
					done in R, and then passed into the front-end where D3 then plots the data in the form of the
					flowers.
				</p>

				<p>
					For the data needed here, an initial request is made to get a unique ID for the player from their
					publicly displayed username. Their ID is then used to get a list of their recent match's game IDs.
					These game ID's are then used to get details of that particular match with one request per game.
					Each game's details and statistics are filtered for the details of the player only, and added to a
					DataFrame, which then gets sent to the frontend as a JSON object.
				</p>

				<h2 className={style.subheading}>D3 and React</h2>

				<img className={style.image} src={flowersImage} alt="Flowers" />

				<p>
					This was the first time utilizing D3 with React together for me, and Shirley Wu's various talks
					about using them together as well as{' '}
					<a href="https://www.youtube.com/watch?v=9uEmNgHzPhQ&list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B">
						The Muratorium's YouTube series
					</a>{' '}
					on using D3 with React Hooks were the starting point of learning integrating these two together.
				</p>

				<p>
					The player's recent games are split into one flower per game, and currently the most recent 20
					played games are used. A player's number of deaths are the number of blue petals, while kills are
					the number of red petals.{' '}
				</p>

				<p>
					I'll likely use this same process of having R do back-end data analysis then passing it to a React
					and D3 front end for a larger LoL player stats visualization project in the future similar to what
					was done a few months prior for INFO 201 at UW, where I built a Shiny app purely in R that
					visualized various statistics for the player.
				</p>
			</FadeIn>
		</div>
	);
}

export default LoLFlowers;
