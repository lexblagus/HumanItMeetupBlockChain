import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import contents from './contents';
import Menu from './components/Menu';
// import contents from './contents';
// import Cover from './components/Cover';
import { Link } from "react-router-dom";
import './App.css';

const itemFinder2 = (contentList, lookFor, parentPath = '') => contentList.find(
	item => [parentPath, item.path].join('/') === lookFor || (
		item.contents && itemFinder(
			item.contents,
			lookFor,
			item.path
		)
	) || (()=>{
		console.log(
			'lookFor = ', lookFor,
			'item.path = ', item.path,
			' !! = ', [parentPath, item.path].join('/')
			// [item.path, lookFor].join('/')
		);
		return false;
	})()
);

const itemFinder = (contentList, lookFor, parentPath = '') => {
	const r =  contentList.find(item => item.path === lookFor);
	if (r) return contentList;

	let x = {};
	contentList.map(item => {

	});
};

/*
⬆ ➡ ⬇ ⬅
↑ → ↓ ←
*/


function App() {

	const [menuOpen, setMenuOpen] = useState(false);
	const [currItem, setCurrItem] = useState({});
	
	const location = unescape(useLocation().pathname.split('/').filter(e => !!e).join('/'));
	
	useEffect(() => {
		console.log( 
			'location =',
			location,
			// contents,
			'itemFinder result =',
			itemFinder(
				contents,
				location
			),
		);
		// setCurrItem(itemFinder(contents, ''));
		setMenuOpen(false);
	}, [location]);

	const handleToggleMenu = evt => {
		setMenuOpen(!menuOpen);
		evt.preventDefault();
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
						<Routes>
							<Route path="/" element={<>ROOT</>} />
							<Route path="Cover" element={<>Cover</>} />
							<Route path="Index" element={<>Index</>} />
							<Route path="History" element={<>History</>} />
							<Route path="Technology" element={<>Technology</>} />
							<Route
								path="Technology/BlocksAndChains"
								element={<>Blocks &amp; Chains</>}
							/>
							<Route path="Opportunities" element={<>Opportunities</>} />
							<Route element={<>Not found</>} />
						</Routes>
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
