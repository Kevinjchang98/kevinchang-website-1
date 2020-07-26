import React from 'react';

import style from './PhotoProject.module.css';

import Gallery from 'react-photo-gallery';

import imageOne from '../../../images/photoProjects/erika-portraits/1.jpg';

function PhotoProject() {
	const photos = [
		{
			src: { imageOne },
			width: 1,
			height: 1
		},
		{
			src: { imageOne },
			width: 1,
			height: 1
		}
	];
	return (
		<div className={style.projectContainer}>
			<h1>Project view</h1>
			<Gallery photos={photos} />
		</div>
	);
}

export default PhotoProject;
