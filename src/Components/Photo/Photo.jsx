import React from 'react';

import style from './Photo.module.css';
import MenuLeft from './MenuLeft/MenuLeft';
import MenuRight from './MenuRight/MenuRight';
import FadeIn from 'react-fade-in';

import erikaImage from './img/erika.png';
import nanjingImage from './img/nanjing.png';
import cherryImage from './img/cherryblossom.png';
import dailyImage from './img/daily.png';
import blueAngelsImage from './img/blueangels.png';

function Photo() {
	return (
		<FadeIn className={style.mainContainer}>
			<div className={style.photoContainer}>
				{/* Consider putting link inside component so sides aren't clickable maybe */}
				<MenuLeft
					image={erikaImage} //
					title="Erika"
					link="/photo/erika"
					isEnglish={true}
				/>
				<MenuRight
					image={dailyImage} //
					title="The Daily"
					link="/photo/thedaily"
					isEnglish={true}
				/>
				<MenuLeft
					image={cherryImage} //
					title="桜祭り"
					link="/photo/cherryblossom"
					isEnglish={false}
				/>
				<MenuRight
					image={blueAngelsImage} //
					title="Blue Angels"
					link="/photo/blueangels"
					isEnglish={true}
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
