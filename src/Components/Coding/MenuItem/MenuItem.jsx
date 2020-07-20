import React from 'react';

import style from './MenuItem.module.css';

function MenuItem(props) {
	const { title, date, lang, githubLink } = props;

	return (
		<div className={style.itemContainer}>
			<h1 className={style.title}>{title}</h1>
			<div className={style.spacer} />

			<p className={style.detail}>
				<a href={githubLink} target="_blank">
					{date}
					<br />
					{lang}
				</a>
			</p>
		</div>
	);
}

export default MenuItem;
