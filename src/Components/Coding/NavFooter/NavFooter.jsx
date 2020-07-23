import React from 'react';

import style from './NavFooter.module.css';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

function NavFooter(props) {
	const { siteLink, githubLink } = props;

	if (siteLink != '') {
		return (
			<div className={style.footerContainer}>
				<Link to="/programming" className={style.button}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-arrow-left"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						stroke-width="1"
						stroke="var(--nord0)"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<line x1="5" y1="12" x2="19" y2="12" />
						<line x1="5" y1="12" x2="11" y2="18" />
						<line x1="5" y1="12" x2="11" y2="6" />
					</svg>
				</Link>

				<span className={style.empty} />

				<a href={siteLink} target="_blank" rel="noopener noreferrer" className={style.button}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-browser"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#2c3e50"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<rect x="4" y="4" width="16" height="16" rx="1" />
						<line x1="4" y1="8" x2="20" y2="8" />
						<line x1="8" y1="4" x2="8" y2="8" />
					</svg>
				</a>
				<span className={style.empty} />

				<a href={githubLink} target="_blank" rel="noopener noreferrer" className={style.button}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-github"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#2c3e50"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
					</svg>
				</a>
			</div>
		);
	} else {
		return (
			<div className={style.footerContainer}>
				<Link to="/programming" className={style.button}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-arrow-left"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						stroke-width="1"
						stroke="var(--nord0)"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<line x1="5" y1="12" x2="19" y2="12" />
						<line x1="5" y1="12" x2="11" y2="18" />
						<line x1="5" y1="12" x2="11" y2="6" />
					</svg>
				</Link>

				<span className={style.empty} />

				<a href={githubLink} target="_blank" rel="noopener noreferrer" className={style.button}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-github"
						width="44"
						height="44"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#2c3e50"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
					</svg>
				</a>
			</div>
		);
	}
}

export default NavFooter;
