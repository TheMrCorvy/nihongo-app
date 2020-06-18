import React from "react";

function Parallax(props) {
	let pageHeader = React.createRef();

	React.useEffect(() => {
		const updateScroll = () => {
			let windowScrollTop = window.pageYOffset / 3;
			if (pageHeader.current) {
				pageHeader.current.style.transform =
					"translate3d(0," + windowScrollTop + "px,0)";
			}
		};
		window.addEventListener("scroll", updateScroll);
		return function cleanup() {
			window.removeEventListener("scroll", updateScroll);
		};
	});
	return (
		<>
			<div className="page-header page-header-small">
				<div
					className="page-header-image"
					style={{
						backgroundImage: "url(" + props.BackgroundImage + ")",
					}}
					ref={pageHeader}
				></div>
			</div>
		</>
	);
}

export default Parallax;
