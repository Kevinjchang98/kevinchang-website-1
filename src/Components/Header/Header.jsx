import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.css';

function Header() {
	const path = window.location.pathname.split('/').slice(1);

	function getFullPath(currentPath, path) {
		var returnPath = '';

		for (var i = 0; i < path.length; i++) {
			if (currentPath === path[i]) {
				for (var j = 0; j < i + 1; j++) {
					returnPath = returnPath + '/' + path[j];
				}

				return returnPath;
			}
		}
	}

	const pathNav = path.map((currentPath) => {
		return (
			<Link className={style.headerPath} to={getFullPath(currentPath, path)} key={currentPath}>
				{'/' + currentPath}
			</Link>
		);
	});

	return (
		<div className={style.headerContainer}>
			<Link to="/">
				<p className={style.headerText}>Kevin Chang</p>
			</Link>

			<p className={style.headerText}>{path[0] !== '' ? pathNav : null}</p>

			<span className={style.middleContainer} />

			<Link to="/contact">
				<p className={style.headerText}>Contact</p>
			</Link>
		</div>
	);
}

export default Header;
