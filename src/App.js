import logo from './logo.svg';
import styles from './App.css';

function App() {
	{/*
	⬆ ➡ ⬇ ⬅
	↑ → ↓ ←
	*/}
	return (
		<div className="App">
			<div className="container rows root">
				<div className="container item cols">
					<div className="container item nav menu alt">
						<span><a href="#" className="action" onClick={e => e.preventDefault()}>☰</a></span>
					</div>
					<div className="container item nav up alt">
						<span><a href="#" className="action" onClick={e => e.preventDefault()}>⬆</a></span>
					</div>
					<div className="container item title alt">
						<span>Title</span>
						</div>
					<div className="container item nav alt"></div>
					<div className="container item nav right alt">
						<span><a href="#" className="action" onClick={e => e.preventDefault()}>→</a></span>
					</div>
				</div>
				<div className="item canvas">
					Hello
				</div>
				<div className="container item cols">
					<div className="container item nav alt"></div>
					<div className="container item nav down alt">
						<span><a href="#" className="action" onClick={e => e.preventDefault()}>⬇</a></span>
					</div>
					<div className="container item spacer alt"></div>
					<div className="container item nav left alt">
						<span><a href="#" className="action" onClick={e => e.preventDefault()}>←</a></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
