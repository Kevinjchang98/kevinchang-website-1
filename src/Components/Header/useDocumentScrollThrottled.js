// From mattholland on https://medium.com/mtholla/create-a-transitioning-header-using-react-hooks-like-mediums-c70ed211f7c9

import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

function useDocumentScrollThrottled(callback) {
	const [ , setScrollPosition ] = useState(0);
	let previousScrollTop = 0;

	function handleDocumentScroll() {
		const { scrollTop: currentScrollTop } = document.documentElement || document.body;

		setScrollPosition((prevPos) => {
			previousScrollTop = prevPos;
			return currentScrollTop;
		});
		callback({ previousScrollTop, currentScrollTop });
	}

	const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 100);

	useEffect(() => {
		window.addEventListener('scroll', handleDocumentScrollThrottled);

		return () => window.removeEventListener('scroll', handleDocumentScrollThrottled);
	}, []);
}

export default useDocumentScrollThrottled;
