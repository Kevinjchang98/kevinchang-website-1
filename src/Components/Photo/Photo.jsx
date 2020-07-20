import React from 'react';

import style from './Photo.module.css';
import MenuLeft from './MenuLeft/MenuLeft';

import erikaImage from './img/erika/1.png';

function Photo() {
	return (
		<div className={style.photoContainer}>
			{/* Consider putting link inside component so sides aren't clickable maybe */}
			<MenuLeft
				image={erikaImage} //
				title="Erika"
				link="/photo/erika"
			/>
			<MenuLeft
				image={erikaImage} //
				title="Blue Angels"
				link="/photo/blueangels"
			/>
			<MenuLeft
				image={erikaImage} //
				title="Something Else"
				link="/photo/else"
			/>
		</div>
	);
}

export default Photo;
