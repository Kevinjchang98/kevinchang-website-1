import React from 'react';

import style from './MenuItem.module.css';

function MenuItem(props) {
	const { title, date, lang, githubLink } = props;

	return (
		<div className={style.itemContainer}>
			{/* Convert  this to not use div, and put the Link element here to avoid the <a> as descendent of <a> warning */}
			<h1 className={style.title}>{title}</h1>
			<div className={style.spacer} />

			<p className={style.detail}>
				<a href={githubLink} target="_blank" rel="noopener noreferrer">
					{date}
					<br />
					{lang}
				</a>
			</p>
		</div>
	);
}

export default MenuItem;
