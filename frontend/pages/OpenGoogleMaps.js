import React from 'react';

function OpenGoogleMaps() {
  const googleMapsUrl = 'https://www.google.com/maps/search/Nike+Store+in+india/@20.9360714,72.9527492,7.25z?entry=ttu';

  return (
    <div>
      <h1>Nike Store in India</h1>
      <p>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          Open in Google Maps
        </a>
      </p>
    </div>
  );
}

export default OpenGoogleMaps;
