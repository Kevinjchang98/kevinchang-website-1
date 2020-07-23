import React from 'react';

import style from '../Project.module.css';
import FadeIn from 'react-fade-in';
import NavFooter from '../../NavFooter/NavFooter';

function PersonalWebsite() {
	return (
		<div className={style.projectContainer}>
			<FadeIn className={style.contentContainer}>
				<h1 className={style.projectTitle}>Individual writeup thing</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ex metus. Ut iaculis sem
					metus, at ultricies ipsum mollis vitae. Mauris lorem sapien, varius vitae ex sed, pulvinar facilisis
					lacus. Integer ac sagittis metus. Proin varius odio quis luctus dictum. Proin vestibulum id felis
					dapibus mollis. Ut varius ligula ut sem porttitor, eu aliquet elit suscipit. Praesent tristique quam
					odio, ut consectetur purus tempus ut. Vestibulum ante ipsum primis in faucibus orci luctus et
					ultrices posuere cubilia curae; Sed id nulla facilisis, fringilla eros in, eleifend tortor. Nam
					fringilla nisl ac elementum finibus.
				</p>

				<p>
					Suspendisse sed porta metus, vel molestie felis. Pellentesque pulvinar nisl et nunc commodo
					sollicitudin. Integer in sapien mauris. Vestibulum a lectus semper, viverra enim eu, fermentum
					lacus. Aenean efficitur lobortis nisi, sit amet pharetra est semper vel. Maecenas purus nulla,
					commodo sit amet nunc ut, interdum volutpat est. Etiam ornare lacus at lectus varius, id pretium leo
					accumsan. Donec sodales placerat leo, eu vestibulum neque vulputate ut. Phasellus cursus cursus
					enim, vitae rutrum enim molestie sit amet.
				</p>

				<p>
					Mauris sit amet risus turpis. Donec augue quam, volutpat ut condimentum ut, ullamcorper ultricies
					mi. Integer a consectetur tortor, ut dapibus orci. Etiam vitae libero at massa posuere laoreet non
					ut enim. Sed non mi a leo ornare hendrerit. Donec dictum rhoncus ipsum non gravida. Fusce cursus
					ornare nisi, sed porttitor justo dictum et. Nulla maximus vel nisi sed dapibus. Donec gravida massa
					sit amet felis tristique, sit amet convallis quam consequat. Curabitur congue et lacus nec rhoncus.
					Etiam fringilla tortor sed ante iaculis laoreet. Aliquam nisl justo, bibendum ut tristique sit amet,
					porta vitae ipsum. Vestibulum ac lectus et neque dictum pulvinar. Nullam accumsan, nisi ut fermentum
					blandit, elit mi posuere sapien, eget posuere mi metus a nisi. Maecenas massa metus, malesuada eu ex
					id, convallis viverra justo. Suspendisse id elit id est viverra ultricies ac in purus.
				</p>

				<NavFooter siteLink="" githubLink="https://github.com/Kevinjchang98/kevinchang-website" />
			</FadeIn>
		</div>
	);
}

export default PersonalWebsite;
