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
						<a href='mailto:kevinjchang98@gmail.com' className={style.details}>kevinjchang98@gmail.com</a>
					</div>

					<div className={style.subcontentContainer}>
						<h2 className={style.subsectionTitle}>Follow</h2>
                        <p className={style.details}>
                            <a href='https://github.com/Kevinjchang98'>Github</a>
                        </p>

                        <p className={style.details}>
                            <a href='https://www.linkedin.com/in/kevin-c-b69345b2/'>LinkedIn</a>
                        </p>
					</div>
				</div>
			</FadeIn>
		</div>
	);
}

export default Contact;
