import React from 'react';
import ReactPlayer from 'react-player';

import style from './VideoProject.module.css';

function VideoProject(props) {
	const { title, url } = props;

	return (
		<div className={style.projectContainer}>
			<h1 className={style.videoTitle}>{title}</h1>

			<ReactPlayer url={url} width="100%" height="100%" />
		</div>
	);
}

export default VideoProject;
