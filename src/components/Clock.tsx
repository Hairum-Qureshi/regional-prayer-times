import { useState, useEffect } from "react";

export default function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	function displayTime() {
		const currHour = time.getHours() % 12 || 12;
		const currMinutes =
			time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
		const currSeconds =
			time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
		const currTime = `${currHour}:${currMinutes}:${currSeconds}`;
		const meridiem = time.getHours() >= 12 ? "PM" : "AM";
		return `${currTime} ${meridiem}`;
	}
	return (
		<h1 className="text-center text-5xl font-semibold text-white/90 mt-10">
			{displayTime()}
		</h1>
	);
}
