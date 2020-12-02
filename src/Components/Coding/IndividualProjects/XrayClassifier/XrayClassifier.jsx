import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

function XrayClassifier() {
	return (
		<div className={style.projectContainer}>
			<FadeIn className={style.contentContainer}>
				<h1 className={style.projectTitle}>Pneumonia Xray Classifier</h1>
				<NavFooter
					siteLink="https://pneumonia-ml.netlify.app/"
					githubLink="https://github.com/Kevinjchang98/pneumonia-ml-flask"
				/>

				<div className={style.descriptionContainer}>
					<div className={style.descriptionList}>
						<p className={style.descriptionListItem}>Purpose: Personal Project</p>
						<p className={style.descriptionListItem}>Project Type: Python, Scikit-Learn, Flask, React</p>
						<p className={style.descriptionListItem}>Date: Fall, 2020</p>
					</div>
					<div className={style.descriptionParagraph}>
						<p>
							A machine-learning image classifier that classifies input X-ray images of lungs into those
							that have pneumonia and those that do not.
						</p>
					</div>
				</div>

				<p>
					This was one of the first projects in machine learning which I decided to make while going through
					Aurélion Géron's "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow" textbook. It's
					also the first time I've built an API using Python and Flask on Heroku which a front-end React app
					hosted on Netlify makes requests to.
					{/* TODO: Link textbook */}
				</p>
			</FadeIn>
		</div>
	);
}

export default XrayClassifier;
