import React from 'react';
import { Link } from 'react-router-dom';

import style from './Photo.module.css';
import MenuLeft from './MenuLeft/MenuLeft';

import erikaImage from './img/erika/1.png';

function Photo() {
	return (
		<div className={style.photoContainer}>
			{/* Consider putting link inside component so sides aren't clickable maybe */}
			<Link to="/photo/erika">
				<MenuLeft
					image={erikaImage} //
					title="Erika"
				/>
			</Link>
			<MenuLeft
				image={erikaImage} //
				title="Blue Angels"
			/>
			<MenuLeft
				image={erikaImage} //
				title="Something Else"
			/>
		</div>
	);
}

export default Photo;
