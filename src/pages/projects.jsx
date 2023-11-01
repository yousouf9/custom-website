import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import TotalProjects from "../components/projects/AllTotalProject";
import ProjectHeader from "../components/projects/ProjectHeader";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container" style={{paddingTop: 0}}>
						<div className="projects-list">
								<ProjectHeader />
						</div>
						<div className="title projects-title">
							Compt. Suleiman Umar Pai: A Journey Through Captured Moments.
						</div>

						<div className="subtitle projects-subtitle">
							Welcome to the captivating visual journey through the life and accomplishments of Compt. Suleiman Umar Pai. This photo page is a testament to the remarkable story of a man whose path was marked by dedication, hard work, and a passion for serving his nation. Through a collection of photographs, we offer a glimpse into his past visitations, experiences, and the many milestones he achieved during his distinguished career.
						</div>

						<div className="projects-list">
							<TotalProjects />
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

export default Projects;
