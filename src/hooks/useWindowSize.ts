"use client";

import { useEffect, useState } from "react";

export default function useWindowSize() {
	const [size, setSize] = useState<{
		width: number;
		height: number;
	}>({ width: 0, height: 0 });

	useEffect(() => {
		function getSize() {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		getSize();
		window.addEventListener("resize", getSize);
		return () => window.removeEventListener("resize", getSize);
	}, []);

	return size;
}
