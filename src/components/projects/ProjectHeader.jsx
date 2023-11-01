import React from "react";
import "./styles/allProjects.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import images from "../../data/photos-carousel";


const ProjectHeader = () => {
	return (
		<div className="all-projects-container">
			 < ImageGallery 

        items={images} 
        thumbnailPosition='left' 
        showBullets={true}
      />
		</div>
	);
};

export default ProjectHeader;
