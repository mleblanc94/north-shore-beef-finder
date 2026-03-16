import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 42.4072,
  lng: -71.3824, // Massachusetts center
};

const BeefMap = ({ shops }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
        {shops.map((shop) => (
          <Marker
            key={shop.id}
            position={{ lat: shop.lat, lng: shop.lng }}
            title={shop.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default BeefMap;