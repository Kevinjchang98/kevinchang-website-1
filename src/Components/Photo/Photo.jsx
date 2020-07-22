import React from 'react';

import style from './Photo.module.css';
import MenuLeft from './MenuLeft/MenuLeft';

import erikaImage from './img/erika.png';
import nanjingImage from './img/nanjing.png';
import cherryImage from './img/cherryblossom.png';
import MenuRight from './MenuRight/MenuRight';
import FadeIn from 'react-fade-in';

function Photo() {
	return (
		<FadeIn>
			<div className={style.photoContainer}>
				{/* Consider putting link inside component so sides aren't clickable maybe */}
				<MenuLeft
					image={erikaImage} //
					title="Erika"
					link="/photo/erika"
					isEnglish={true}
				/>
				<MenuRight
					image={cherryImage} //
					title="桜祭り"
					link="/photo/cherryblossom"
					isEnglish={false}
					imageRight={true}
				/>
				<MenuLeft
					image={nanjingImage} //
					title="南京"
					link="/photo/nanjing"
					isEnglish={false}
				/>
			</div>
		</FadeIn>
	);
}

export default Photo;
