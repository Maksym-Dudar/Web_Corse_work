"use client";

import { useEffect, useState } from "react";

export default function useMouse() {
	const [hasMouse, setHasMouse] = useState(true);

	useEffect(() => {
		const mq = window.matchMedia("(pointer: fine)");

		const update = () => setHasMouse(mq.matches);

		update();
		mq.addEventListener("change", update);

		return () => {
			mq.removeEventListener("change", update);
		};
	}, []);

	return { hasMouse} ;
}
