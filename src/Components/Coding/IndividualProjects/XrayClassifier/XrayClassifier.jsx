import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

import mainPage from '../../../../images/codingProjects/XrayClassifier/mainPage.png';

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

				<p>
					This small project was a good chance to follow along to a similar one from a textbook (classifying
					handwritten numbers) and expanding it to a different data set, then finally implementing the model
					into a usable front and backend.{' '}
				</p>

				<img src={mainPage} alt="Example prediction" className={style.image} />

				<h2 className={style.subheading}>Machine Learning Model</h2>

				<p>
					The model was made as a simple binary image classifier with Scikit-Learn. It takes input X-ray
					images and converts them to grayscale and a lower resolution (128 pixels by 128 pixels). This is
					then encoded as a matrix, and fed into a Stochastic Gradient Descent classifier (The SGDClassifier
					class from Scikit-Learn).
				</p>

				<p>
					For evaluation, cross-validation was manually implemented with stratified sampling to make three
					folds. The model has a big variance with results of 96.7%, 87.1% and 95.1% which is understandable
					given the naive nature of the classifier being used.
				</p>

				<p>
					With a confusion matrix, one gets [[1246, 95], [251, 3341]] which again seems fine given the simple
					model used.
				</p>

				<h2 className={style.subheading}>The Backend</h2>

				<p>
					With the model being made in Python, a Flask API server was set up to load in the previously trailed
					model as well as take in an input Xray image, process it to be the correct grayscale and size, and
					make a prediction with it. This process was hosted on Heroku, and was also the first time I'd worked
					with both creating an API in Python with Flask and publishing it on the internet using Heroku.
				</p>

				<h2 className={style.subheading}>The Frontend</h2>

				<p>
					The frontend was made with React and Blueprint. Since this was relatively simple, I decided to try
					to use Blueprint, as it seems to be highly recommended for data dashboards and similar projects. In
					the future I might look into making more complicated data-science projects with a frontend utilizing
					Blueprint given its relative ease at implementing the relevant elements.
				</p>
			</FadeIn>
		</div>
	);
}

export default XrayClassifier;
