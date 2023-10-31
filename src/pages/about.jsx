import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title1}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description1}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description11}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description12}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description13}
								</div>


								<div className="title about-title2">
									{INFO.about.title2}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description2}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description21}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description22}
								</div>

								<div className="title about-title2">
									{INFO.about.title3}
								</div>
								<div className="subtitle about-subtitle">
									<ul>
									  {INFO.about.awards.map(item => <li>{item}</li>)}
									</ul>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="images/home/home.png"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
