import React from 'react';

import style from './Photo.module.css';
import MenuLeft from './MenuLeft/MenuLeft';

import erikaImage from './img/erika.png';
import nanjingImage from './img/nanjing.png';
import cherryImage from './img/cherryblossom.png';

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
				image={cherryImage} //
				title="桜まつり"
				link="/photo/cherryblossom"
				isEnglish={false}
			/>
			<MenuLeft
				image={nanjingImage} //
				title="南京"
				link="/photo/nanjing"
				isEnglish={false}
			/>
		</div>
	);
}

export default Photo;
