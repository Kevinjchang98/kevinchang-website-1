import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

function Phys() {
	return (
		<div className={style.projectContainer}>
			<FadeIn className={style.contentContainer}>
				<h1 className={style.projectTitle}>Physics Data Analysis</h1>

				<NavFooter siteLink="" githubLink="https://github.com/Kevinjchang98/PHYS432" />

				<div className={style.descriptionContainer}>
					<div className={style.descriptionList}>
						<p className={style.descriptionListItem}>Purpose: School lab</p>
						<p className={style.descriptionListItem}>Project Type: MATLAB, LaTeX</p>
						<p className={style.descriptionListItem}>Date: Spring, 2020</p>
					</div>
					<div className={style.descriptionParagraph}>
						<p>
							Various 4th year undergraduate physics labs allowed for data analysis using Matlab with
							reports written in LaTeX. Three examples from the Phys 432: Modern Physics Laboratory course
							are included.
						</p>
					</div>
				</div>

				<a
					href="https://github.com/Kevinjchang98/PHYS432/blob/master/432Lab1/432Lab1-Rev1.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={style.subheading}>Hydrogen-Deuterium Mass Ratio</h2>
				</a>

				<p>
					This lab used MATLAB to automatically detect the center of various peaks in emission spectra. A
					Gaussian curve was fit to noisy data, which then had its peak selected. Uncertainties were manually
					chosen. Raw data given was in the csv form, and visualizations were created in MATLAB. Other lab
					partners further plotted the data using Python.
				</p>

				<a
					href="https://github.com/Kevinjchang98/PHYS432/blob/master/432Lab3/432Lab3.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={style.subheading}>Frank Hertz Experiment</h2>
				</a>

				{/* Include link and reference to digitize2() */}
				<p>
					Similar techniques with automatic peak detection were used to detect peaks and troughs in the raw
					data for this experiment. The raw data were from paper charts, which were then digitized to digital
					data through using the digitize2() function in MATLAB.
				</p>

				<a
					href="https://github.com/Kevinjchang98/PHYS432/blob/master/432Lab4/432Lab4.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={style.subheading}>Zeeman Effect</h2>
				</a>

				<p>
					MATLAB was used to automatically find peaks, with manual sampling of the data used to label peaks
					that were not automatically detected. Other lab partners used Python and furthered the data analysis
					with the data processed from MATLAB.
				</p>
			</FadeIn>
		</div>
	);
}

export default Phys;
