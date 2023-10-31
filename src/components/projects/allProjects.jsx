import React from "react";

import Project from "./project";
import "./styles/allProjects.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeImages from "../../data/homeimages";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			 <AliceCarousel
				mouseTracking 
				items={HomeImages} 
				animationType='slide'
				autoPlay={true}
				controlsStrategy='alternate'
				/>
		</div>
	);
};

export default AllProjects;
