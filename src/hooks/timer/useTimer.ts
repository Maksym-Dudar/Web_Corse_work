"use client"

import { useEffect, useState } from "react";

export default function useTimer(interval: number = 1000): Date {
	const [time, setTime] = useState<Date>(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, interval);

		return () => clearInterval(timer);
	}, [interval]);

	return time;
}
