import "./App.css";
import MainComponent from "./components/MainComponent";

const comment = {
	date: new Date(),
	text: "Ihope you enjoy my restaurant!",
	author: {
		name: "alberto",
		avatarUrl: "./images/alberto.png",
	},
};

function App() {
	return (
		<div className="App">
			<MainComponent />
		</div>
	);
}
export default App;
