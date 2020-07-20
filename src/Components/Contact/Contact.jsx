import React from 'react';

import style from './Contact.module.css';

function Contact() {
	return (
		<div className={style.contactContainer}>
			<h1 className={style.sectionTitle}>Contact me</h1>

			<div className={style.contentContainer}>
				<div className={style.subcontentContainer}>
					<h2>Location</h2>
					<p>Seattle, WA, USA</p>
				</div>

				<div className={style.subcontentContainer}>
					<h2>Contact</h2>
					<p>kevinjchang98@gmail.com</p>
				</div>

				<div className={style.subcontentContainer}>
					<h2>Follow</h2>
					<p>Put some links here</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
