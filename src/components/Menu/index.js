import { Link } from "react-router-dom";
import contents from '../../contents';
import './styles.css';

const MenuList = ({toc}) => Object.keys(toc).map((slug, index) => (
	<ol className="ol" key={index}>
		<li className="li">
			<Link to={slug} className="link-chapter">{toc[slug].title}</Link>
			{toc[slug].contents && <MenuList toc={toc[slug].contents} />}
		</li>
	</ol>
));

export default function Menu() {
	// console.warn(JSON.stringify(contents, null, '\t'));
	return (<div className="menu-wrapper">
		<MenuList toc={contents} />
	</div>);
};
