import ExplorePreview from "./Explore";
import React from "react";


const HomeComponent = (props) => {
	const handleClick = (url) => {
		window.location.href = url;
};
	const text = props.text;
  let content;
  
  if (text === "Esplora") {
 content = ExplorePreview;
  } else if (text === "Shop") {
//////////////////   content = ShopPreview;
  } else {
// content = PersonalPreview;
  }

	return (
		<div className="nav-slice">
			<div className="nav-element" onClick={() => handleClick(props.url)}>
        <h4> { text } </h4>
			</div>
			<div className="nav-content">
        {content ? React.createElement(content) : null}
      </div>
        	</div>
	);
};

export default HomeComponent;
