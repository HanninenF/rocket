import "./ChildDemo.scss";

type ChildDemoProps = {
	title: string;
	paragraph: string;
};

export default function ChildDemo({
	title,
	paragraph,
}: Readonly<ChildDemoProps>) {
	return (
		<div className="ChildDemo">
			<h1>{title}</h1>
			<p>{paragraph}</p>
		</div>
	);
}
