import React from 'react';
import style from './MenuLeft.module.css';
import { Parallax } from 'react-scroll-parallax';

function MenuLeft(props) {
	const image = props.image;
	const title = props.title;
	const description = props.description;

	return (
		<div className={style.mainContainer}>
			<Parallax y={[ 50, -50 ]}>
				<div className={style.imageContainer}>
					<img className={style.image} src={image} alt="asdf" />
				</div>
			</Parallax>
			<div className={style.textContainer}>
				<Parallax y={[ -10, 10 ]}>
					<h1 className={style.sectionTitle}>{title}</h1>
				</Parallax>

				<Parallax className={style.descriptionContainer} y={[ -5, 5 ]}>
					{description}
				</Parallax>
			</div>
		</div>
	);
}

export default MenuLeft;
