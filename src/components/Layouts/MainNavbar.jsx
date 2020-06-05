import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
} from "reactstrap";

function scrollTop() {
	window.scrollTo(0, 0);
}

function MainNavbar() {
	const [collapseOpen, setCollapseOpen] = React.useState(false);

	return (
		<React.Fragment>
			{collapseOpen ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle("nav-open");
						setCollapseOpen(false);
					}}
				/>
			) : null}
			<Navbar
				className="fixed-bottom mb-0 py-0 px-4"
				color="danger"
				expand="lg"
				style={{
					background: "linear-gradient(87deg,#f5365c 0,#f56036 100%)",
				}}
			>
				<Container>
					<div className="navbar-translate text-center">
						<NavbarBrand>
							<i className="fas fa-2x fa-search"></i>
						</NavbarBrand>

						<NavbarBrand
							to="/"
							tag={Link}
							onClick={() => {
								scrollTop();
							}}
						>
							<i className="fas fa-2x fa-home"></i>
						</NavbarBrand>
						<button
							className="navbar-toggler navbar-toggler"
							onClick={() => {
								document.documentElement.classList.toggle(
									"nav-open"
								);
								setCollapseOpen(!collapseOpen);
							}}
							aria-expanded={collapseOpen}
							type="button"
						>
							<span className="navbar-toggler-bar top-bar"></span>
							<span className="navbar-toggler-bar middle-bar"></span>
							<span className="navbar-toggler-bar bottom-bar"></span>
						</button>
					</div>
					<Collapse
						className="justify-content-end"
						isOpen={collapseOpen}
						navbar
					>
						<Nav navbar>
							<NavItem>
								<NavLink href="https://play.google.com/store/apps/details?id=com.google.samples.apps.iosched">
									<h5 className="text-capitalize">
										Valorar App en Google Play
									</h5>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://api.whatsapp.com/send?text=Repasa%20tus%20conocimientos%20de%20Japonés%20fácilmente%20con%20Nihongo%20App&amp;https://material-pwa.herokuapp.com">
									<h5 className="text-capitalize">
										Comparte esta App en WhatsApp
									</h5>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="https://twitter.com/intent/tweet?text=Repasa%20tus%20conocimientos%20de%20Japonés%20fácilmente%20con%20Nihongo%20App
								amp;url=https://material-pwa.herokuapp.com&amp;hashtags=NihongoApp"
								>
									<h5 className="text-capitalize">
										Comparte esta App en Twitter
									</h5>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="https://www.facebook.com/sharer/sharer.php?uhttps://material-pwa.herokuapp.com"
									target="_blank"
								>
									<h5 className="text-capitalize">
										Comparte esta App en Facebook
									</h5>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									to="/creditos"
									tag={Link}
									onClick={() => {
										scrollTop();
									}}
								>
									<h5 className="text-capitalize">
										Créditos de la App
									</h5>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default MainNavbar;
