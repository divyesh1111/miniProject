
import React from 'react';


function NikeStoreMap() {
  const googleMapsUrl = 'https://www.google.com/maps/search/Nike+Store+in+india/@20.9360714,72.9527492,7.25z?entry=ttu';

  return (
    <div>
      <h1>Nike Store in India</h1>
      <iframe
        width="100%"
        height="500"
        src={googleMapsUrl}
        allowFullScreen
        loading="lazy"
        title="Nike Store in India"
      ></iframe>
    </div>
  );
}

export default NikeStoreMap;
