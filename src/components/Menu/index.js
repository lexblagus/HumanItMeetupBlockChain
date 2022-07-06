import { Link } from "react-router-dom";
import contents from '../../contents';
import { useLocation } from 'react-router-dom';
import './styles.css';

export default function Menu() {
	let location = useLocation();
	
	const MenuList = ({toc, parentPath=''}) => toc.map((content, index) => (
		<ol className="ol" key={index}>
			<li className="li">
				<Link
					to={parentPath + '/' + content.path}
					className={[
						"link-chapter",
						location.pathname === '/' + parentPath + '/' + content.path && "link-chapter-selected"
					].join(' ')}
				>{content.title}</Link>
				{content.contents && <MenuList toc={content.contents} parentPath={content.path} />}
			</li>
		</ol>
	));
	
	return (<div className="menu-wrapper">
		<MenuList toc={contents} />
	</div>);
};
