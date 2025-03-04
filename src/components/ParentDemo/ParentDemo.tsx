import ChildDemo from "../ChildDemo/ChildDemo";
import "./ParentDemo.scss";

export default function ParentDemo() {
	return (
		<div className="ParentDemo">
			<h1>rubrik</h1>
			<ChildDemo title="Child 1" paragraph="en massa text här" />
			<ChildDemo title="Child 2" paragraph="en massa mer text här" />
			<ChildDemo title="Child 3" paragraph="en massa mer text här" />
		</div>
	);
}
