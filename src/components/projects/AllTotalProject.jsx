import React from "react";
import "./styles/allProjects.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import Images from "../../data/homeimages";
import HomeSection from "../home-section/homeSection";

const TotalProjects = () => {
	return (
		<div className="all-projects-container">
			 <HomeSection images={Images}/>
		</div>
	);
};

export default TotalProjects;
