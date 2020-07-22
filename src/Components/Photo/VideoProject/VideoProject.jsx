import React from 'react';
import ReactPlayer from 'react-player';

import style from './VideoProject.module.css';
import FadeIn from 'react-fade-in';

function VideoProject(props) {
	const { title, url } = props;

	return (
		<FadeIn delay={300}>
			<div className={style.projectContainer}>
				<h1 className={style.videoTitle}>{title}</h1>

				<ReactPlayer onReady={console.log('ready')} url={url} width="100%" height="100%" />
			</div>
		</FadeIn>
	);
}

export default VideoProject;
