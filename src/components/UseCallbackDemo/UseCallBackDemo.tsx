import { useCallback, useState } from "react";

export default function UseCallBackDemo() {
	const [count, setCount] = useState(0);

	const handleClickWithoutCallback = () => {
		setCount(count + 1);
	};

	const handleClick = useCallback(() => {
		setCount((prev) => prev + 1);
	}, []);

	console.log("Render!");

	return (
		<div>
			<h1>UseCallBackDemo</h1>
			<p>Count: {count}</p>
			<button onClick={handleClick}>Add count</button>
		</div>
	);
}
