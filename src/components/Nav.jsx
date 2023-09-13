import { NavLink, useMatch } from 'react-router-dom';

function Nav() {
	const isThemeActive = useMatch('/theme');
	const isRecordPageActive = useMatch('/recordpage');
	const isAddCommunityActive = useMatch('/addcommunity');
	const isMyPageActive = useMatch('/mypage');
	const isThemeRecordActive = useMatch('/theme/:dataId');
	const isUploadRecordActive = useMatch('/upload');
	const isMyRecordActive = useMatch('/myrecord');
	const isBookMarkActive = useMatch('/bookmark');

	return (
		<nav className="text-center bg-ec3 text-ec1 font-bold max-w-[600px] min-w-[320px] m-auto fixed bottom-0 left-0 right-0">
			<ul className="flex justify-around items-center py-5">
				<li>
					<NavLink
						to="/theme"
						className={`text-ec1 hover:text-ec5 ${
							isThemeActive ? 'text-ec5' : ''
						}`}
					>
						테마
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/recordpage"
						className={`text-ec1 hover:text-ec5 ${
							isRecordPageActive || isThemeRecordActive || isUploadRecordActive
								? 'text-ec5'
								: ''
						}`}
					>
						기록
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/postpage"
						className={`text-ec1 hover:text-ec5 ${
							isAddCommunityActive ? 'text-ec5' : ''
						}`}
					>
						커뮤니티
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/mypage"
						className={`text-ec1 hover:text-ec5 ${
							isMyPageActive || isMyRecordActive || isBookMarkActive
								? 'text-ec5'
								: ''
						}`}
					>
						마이
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
