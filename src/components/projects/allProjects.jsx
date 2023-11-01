import React from "react";
import "./styles/allProjects.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSection from "../home-section/homeSection";
import { images } from "../home-section/data";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			 <HomeSection images={images} />
		</div>
	);
};

export default AllProjects;
