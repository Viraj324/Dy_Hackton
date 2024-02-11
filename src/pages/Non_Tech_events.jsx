import React, { useState } from 'react';
import 'pages/Non_Tech_events.css'; // Import CSS file for styling

function ClubInformation() {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card">
      <div className="logo">
        <img src="your-image-url.jpg" alt="Club Logo" />
      </div>
      <div className={`content-container ${showMore ? 'expanded' : ''}`}>
        <div className="club-name">Football Club</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at velit vel arcu cursus fermentum sed eget erat. Curabitur fringilla neque velit, vel tempus libero blandit ac.
          <span className="more">
            Curabitur id quam id enim viverra rhoncus et id libero. Sed nec sapien nec sem cursus tristique. Cras scelerisque pharetra ex, vel bibendum ex finibus eget. Aliquam id ligula non augue pellentesque consequat vel eget ipsum. Sed nec aliquet tortor. In posuere hendrerit urna, non sollicitudin mi viverra nec. Donec dapibus eros ac fermentum tempor.
          </span>
        </div>
      </div>
      <div className="see-more" onClick={toggleMore}>
        {showMore ? "See Less" : "See More"}
      </div>
    </div>
  );
}

export default ClubInformation;
