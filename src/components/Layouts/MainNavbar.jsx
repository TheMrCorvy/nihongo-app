import React from "react"
import { Link, useHistory, useState, useEffect } from "react-router-dom"

import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Button } from "reactstrap"

function scrollTop() {
	window.scrollTo(0, 0)
}

let deferredPrompt

function MainNavbar() {
	const [collapseOpen, setCollapseOpen] = useState(false)

	const [installable, setInstallable] = useState(false)

	const history = useHistory()

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (e) => {
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault()
			// Stash the event so it can be triggered later.
			deferredPrompt = e
			// Update UI notify the user they can install the PWA
			setInstallable(true)
		})

		window.addEventListener("appinstalled", () => {
			// Log install to analytics
			console.log("INSTALL: Success")
		})
	}, [])

	const handleInstallClick = () => {
		// Hide the app provided install promotion
		setInstallable(false)
		// Show the install prompt
		deferredPrompt.prompt()
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === "accepted") {
				console.log("User accepted the install prompt")
			} else {
				console.log("User dismissed the install prompt")
			}
		})
	}

	return (
		<React.Fragment>
			{collapseOpen ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle("nav-open")
						setCollapseOpen(false)
					}}
				/>
			) : null}
			<Navbar
				className="fixed-bottom py-0 px-4"
				color="danger"
				expand="lg"
				style={{
					background: "linear-gradient(87deg,#f5365c 0,#f56036 100%)",
					marginBottom: -5,
				}}
			>
				<Container>
					<div className="navbar-translate text-center">
						{/* <NavbarBrand>
							<i className="fas fa-2x fa-search"></i>
						</NavbarBrand> */}
						<NavbarBrand onClick={() => history.goBack()}>
							<i className="fas fa-2x fa-chevron-left"></i>
						</NavbarBrand>

						<NavbarBrand
							to="/"
							tag={Link}
							onClick={() => {
								scrollTop()
							}}
							style={{ marginRight: "-5px" }}
						>
							<i className="fas fa-2x fa-home"></i>
						</NavbarBrand>
						<button
							className="navbar-toggler navbar-toggler"
							onClick={() => {
								document.documentElement.classList.toggle("nav-open")
								setCollapseOpen(!collapseOpen)
							}}
							aria-expanded={collapseOpen}
							type="button"
						>
							<span className="navbar-toggler-bar top-bar"></span>
							<span className="navbar-toggler-bar middle-bar"></span>
							<span className="navbar-toggler-bar bottom-bar"></span>
						</button>
					</div>
					<Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href="https://play.google.com/store/apps/details?id=xyz.appmaker.nydsfp">
									<h5 className="text-capitalize">Valorar App en Google Play</h5>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://api.whatsapp.com/send?text=Repasa%20tus%20conocimientos%20de%20Japonés%20fácilmente%20con%20Nihongo%20App%20Básico%20https://play.google.com/store/apps/details?id=xyz.appmaker.nydsfp">
									<h5 className="text-capitalize">
										Comparte esta App en WhatsApp
									</h5>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="https://twitter.com/intent/tweet?text=Repasa%20tus%20conocimientos%20de%20Japonés%20fácilmente%20con%20Nihongo%20App
								%20https://play.google.com/store/apps/details?id=xyz.appmaker.nydsfp&amp;hashtags=NihongoApp"
								>
									<h5 className="text-capitalize">
										Comparte esta App en Twitter
									</h5>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="https://www.facebook.com/sharer/sharer.php?u=https://play.google.com/store/apps/details?id=xyz.appmaker.nydsfp"
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
										scrollTop()
									}}
								>
									<h5 className="text-capitalize">Créditos de la App</h5>
								</NavLink>
							</NavItem>
							{installable && (
								<NavItem>
									<Button onClick={handleInstallClick}>
										<h5 className="text-capitalize">Instalar App</h5>
									</Button>
								</NavItem>
							)}
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	)
}

export default MainNavbar
