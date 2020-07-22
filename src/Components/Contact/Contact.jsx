import React from 'react';

import style from './Contact.module.css';
import FadeIn from 'react-fade-in';

function Contact() {
	return (
		<div className={style.contactContainer}>
			<FadeIn>
				<h1 className={style.sectionTitle}>Contact me</h1>

				<div className={style.contentContainer}>
					<div className={style.subcontentContainer}>
						<h2 className={style.subsectionTitle}>Location</h2>
						<p className={style.details}>Seattle, WA, USA</p>
					</div>

					<div className={style.subcontentContainer}>
						<h2 className={style.subsectionTitle}>Contact</h2>
						<p className={style.details}>kevinjchang98@gmail.com</p>
					</div>

					<div className={style.subcontentContainer}>
						<h2 className={style.subsectionTitle}>Follow</h2>
						<p className={style.details}>Put some links here</p>
					</div>
				</div>
			</FadeIn>
		</div>
	);
}

export default Contact;
