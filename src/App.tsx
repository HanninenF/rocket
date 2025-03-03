import "./App.scss";
import DisneyCharacterCard from "./components/DisneyCharacterCard/DisneyCharacterCard";
import DisplayData from "./components/DisplayData/DisplayData";
import LukeCard from "./components/LukeCard/LukeCard";
import SWPeopleCard from "./components/SWPeopleCard/SWPeopleCard";

function App() {
	return (
		<>
			<h1>rocket</h1>
			<p>a demo of useEffect</p>
			<DisplayData />
			{/* <LukeCard />
			<SWPeopleCard id={2} />
			<SWPeopleCard id={3} />
			<SWPeopleCard id={22} />
			<DisneyCharacterCard id={308} />
			<DisneyCharacterCard id={20} /> */}
		</>
	);
}

export default App;
