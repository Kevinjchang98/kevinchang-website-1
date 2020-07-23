import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

function Phys() {
	return (
		<div className={style.projectContainer}>
			<FadeIn className={style.contentContainer}>
				<h1 className={style.projectTitle}>Physics Data Analysis</h1>

				<p>
					Various 4th year undergraduate physics labs allowed for data analysis using Matlab with reports
					written in LaTeX. Three examples from the Phys 432: Modern Physics Laboratory course are included.
				</p>

				<h2 className={style.subheading}>Hydrogen-Deuterium Mass Ratio</h2>

				<p>
					This lab used MATLAB to automatically detect the center of various peaks in emission spectra. A
					Gaussian curve was fit to noisy data, which then had its peak selected. Uncertainties were manually
					chosen. Raw data given was in the csv form, and visualizations were created in MATLAB. Other lab
					partners further plotted the data using Python.
				</p>

				<h2 className={style.subheading}>Frank Hertz Experiment</h2>

				{/* Include link and reference to digitize2() */}
				<p>
					Similar techniques with automatic peak detection were used to detect peaks and troughs in the raw
					data for this experiment. The raw data were from paper charts, which were then digitized to digital
					data through using the digitize2() function in MATLAB.
				</p>

				<h2 className={style.subheading}>Zeeman Effect</h2>

				<p>Something about this lab</p>

				<NavFooter siteLink="" githubLink="https://github.com/Kevinjchang98/PHYS432" />
			</FadeIn>
		</div>
	);
}

export default Phys;
