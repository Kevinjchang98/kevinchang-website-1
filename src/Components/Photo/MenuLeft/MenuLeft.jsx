import React from 'react';
import style from './MenuLeft.module.css';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

function MenuLeft(props) {
	const { image, title, description, link } = props;

	return (
		<div className={style.mainContainer}>
			<Parallax y={[ 50, -50 ]}>
				<div className={style.imageContainer}>
					<img className={style.image} src={image} alt="asdf" />
				</div>
			</Parallax>
			<Link to={link} className={style.textContainer}>
				<Parallax y={[ -10, 10 ]}>
					<h1 className={style.sectionTitle}>{title}</h1>
				</Parallax>

				<Parallax className={style.descriptionContainer} y={[ -5, 5 ]}>
					{description}
				</Parallax>
			</Link>
		</div>
	);
}

export default MenuLeft;
