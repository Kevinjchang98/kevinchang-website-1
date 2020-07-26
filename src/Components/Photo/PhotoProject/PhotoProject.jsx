import React, { useState, useCallback } from 'react';

import style from './PhotoProject.module.css';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import FadeIn from 'react-fade-in';

function PhotoProject(props) {
	const [ currentImage, setCurrentImage ] = useState(0);
	const [ viewerIsOpen, setViewerIsOpen ] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	return (
		<FadeIn className={style.projectContainer}>
			<div className={style.contentContainer}>
				<h1 className={style.title}>{props.title}</h1>
				<Gallery photos={props.photos} onClick={openLightbox} />
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							<Carousel currentIndex={currentImage} views={props.photos} />
						</Modal>
					) : null}
				</ModalGateway>
			</div>
		</FadeIn>
	);
}

export default PhotoProject;
