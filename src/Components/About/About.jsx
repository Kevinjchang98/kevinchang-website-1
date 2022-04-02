import React from 'react';

import style from './About.module.css';
import FadeIn from 'react-fade-in';

function About() {
	return (
		<FadeIn>
            <h1 className={style.sectionTitle}>About me</h1>

            <div className={style.contentContainer}>
                <div className={style.subcontentContainer}>
                    <h2 className={style.subsectionTitle}>Education</h2>
                    <h3>Seattle University</h3>
                    <p>2021 - present</p>
                    <p>Currently pursuing a Masters in Computer Science</p>
                    <p>Fundamentals in Computer Science Certificate</p>

                    <h3>University of Washington, Seattle</h3>
                    <p>2016 - 2020</p>
                    <p>Bachelor of Science in Applied Physics</p>
                </div>

                <div className={style.subcontentContainer}>
                    <h2 className={style.subsectionTitle}>Skills</h2>
                    <h3>Previously used</h3>
                    <p>React.js, R, Python, Matlab, C++, Java, D3</p>

                    <h3>Currently learning</h3>
                    <p>Next.js, Three.js</p>
                </div>

            </div>
		</FadeIn>
	);
}

export default About;
