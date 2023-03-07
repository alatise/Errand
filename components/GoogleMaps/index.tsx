import React from "react";

const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Lagos,%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          //   marginHeight="0"
          //   marginWidth="0"
        />
      </div>
    </div>
  );
};

export default Map;
