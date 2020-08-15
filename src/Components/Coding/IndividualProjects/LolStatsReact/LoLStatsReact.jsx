import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

import basic from '../../../../images/codingProjects/LoLStatsReact/basic.png';
import champions from '../../../../images/codingProjects/LoLStatsReact/champions.png';
import time from '../../../../images/codingProjects/LoLStatsReact/time.png';
import trends from '../../../../images/codingProjects/LoLStatsReact/trends.png';
import winloss from '../../../../images/codingProjects/LoLStatsReact/winloss.png';

function LoLStatsReact() {
	return (
		<div className={style.projectContainer}>
			<FadeIn className={style.contentContainer}>
				<h1 className={style.projectTitle}>League of Legends Player Stats in ReactJS and D3</h1>
				<NavFooter
					siteLink="https://kevinjchang98.shinyapps.io/final-project-Kevinjchang98/"
					githubLink="https://github.com/Kevinjchang98/INFO201-LoLStats"
				/>

				<div className={style.descriptionContainer}>
					<div className={style.descriptionList}>
						<p className={style.descriptionListItem}>Purpose: Personal Project</p>
						<p className={style.descriptionListItem}>Project Type: R, ReactJS, D3</p>
						<p className={style.descriptionListItem}>Date: Summer, 2020</p>
					</div>
					<div className={style.descriptionParagraph}>
						<p>
							A rewrite of the previous LoL Stats project written in R and Shiny R to instead use R,
							ReactJS and D3.
						</p>
					</div>
				</div>

				<p>
					This was the first time using R to process data on a server as an API to then pass data to a React
					front-end to visualize the data with D3. Similar R code to the school project of visualizing LoL
					player data using R and Shiny R was used.
				</p>

				<h2 className={style.subheading}>Basic Statistics</h2>

				<img src={basic} alt="Basic Statistics" className={style.image} />

				<p>
					This basic section scrolls through some one-off statistics such as the highest damage dealt in a
					single game, or highest killstreak achieved.
				</p>

				<h2 className={style.subheading}>Recently Played Champions</h2>

				<img src={champions} alt="Per-champion statistics" className={style.image} />

				<p>A frequency chart of the player's played champions in their last 100 games.</p>

				<h2 className={style.subheading}>Time of Games</h2>

				<img src={time} alt="Time-based statistics" className={style.image} />

				<p>
					Similar to the original project, a graph of when the player started their games are split into wins
					and losses, letting players see if there's a particular time of day that may be more successful than
					another. For example, perhaps a player finds that playing in the morning leads to better win/loss
					ratios than late at night.
				</p>

				<h2 className={style.subheading}>Comparison of Won vs. Lost Games</h2>

				<img src={winloss} alt="Win/loss based statistics" className={style.image} />

				<p>
					A couple of key statistics are averaged out over all of the games the player has queried for in the
					landing page, and compared over the games they won and lost. This may lead to analyzing which areas
					of gameplay a player may be lacking in by looking at correlations between averages in the games they
					won vs lost.
				</p>

				<h2 className={style.subheading}>Trends</h2>
				<p>
					Various variables such as but not limited to Minion Score, Damage Dealt, Kills, etc. are plotted by
					game number, where game number linearly spaces out the games with the most recent on the right, and
					the oldest on the left of the x-axis.
				</p>

				<img src={trends} alt="Trends over recent games" className={style.image} />
			</FadeIn>
		</div>
	);
}

export default LoLStatsReact;
