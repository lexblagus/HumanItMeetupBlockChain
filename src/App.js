import { useState } from 'react';
import Menu from './components/Menu';
// import contents from './contents';
// import Cover from './components/Cover';
import { Link } from "react-router-dom";
import './App.css';

/*
⬆ ➡ ⬇ ⬅
↑ → ↓ ←
*/
function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<div className="App">
			<div className="container rows root">
				<div className="container item cols">
					<div className="container item nav menu alt">
						<span><Link to="." className="link-navigation" onClick={handleToggleMenu}>☰</Link></span>
					</div>
					<div className="container item nav up alt">
						<span><Link to="." className="link-navigation" onClick={e => e.preventDefault()}>⬆</Link></span>
					</div>
					<div className="container item title alt">
						<span>
							{menuOpen ? <>
								Menu
							</> : <>
								Title
							</>}
						</span>
						</div>
					<div className="container item nav alt"></div>
					<div className="container item nav right alt">
						<span><Link to="." className="link-navigation" onClick={e => e.preventDefault()}>→</Link></span>
					</div>
				</div>

				{menuOpen && <>
					<div className="fullscreen">
						<Menu />
					</div>
				</>}


				<div className="item canvas">
					{!menuOpen && <>
						{'Hello '.repeat(512)}
					</>}
				</div>


				<div className="container item cols">
					<div className="container item nav alt"></div>
					<div className="container item nav down alt">
						<span><Link to="." className="link-navigation" onClick={e => e.preventDefault()}>⬇</Link></span>
					</div>
					<div className="container item spacer alt"></div>
					<div className="container item nav left alt">
						<span><Link to="." className="link-navigation" onClick={e => e.preventDefault()}>←</Link></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
