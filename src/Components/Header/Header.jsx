import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.css';

function Header() {
	return (
		<div className={style.headerContainer}>
			<Link to="/">
				<p className={style.headerText}>Kevin Chang</p>
			</Link>
			<span className={style.middleContainer} />
			<Link to="/contact">
				<p className={style.headerText}>Contact me</p>
			</Link>
		</div>
	);
}

export default Header;
