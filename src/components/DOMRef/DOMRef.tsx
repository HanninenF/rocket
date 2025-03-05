import { useRef } from "react";

export default function DOMRef() {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		// jag vill ge inputfältet fokus
		inputRef.current?.focus();
	};

	return (
		<div>
			<h1>DOMRef</h1>
			<input ref={inputRef} type="text" placeholder="Programmatisk fokus!" />
			<button onClick={handleClick}>Ge fokus!</button>
		</div>
	);
}
