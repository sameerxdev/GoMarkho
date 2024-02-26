"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 33.66686274838278,
  lng: 73.076182411446,
};

const handleMarkerClick = () => {
  const mapUrl =
    "https://www.google.com/maps/place/Pakland+Business+Center/@33.6666574,73.0735646,17z/data=!4m14!1m7!3m6!1s0x38df954f581447df:0x2f018f6e34b5f9f9!2sPakland+Business+Center!8m2!3d33.6666574!4d73.0761395!16s%2Fg%2F11g8_15sjr!3m5!1s0x38df954f581447df:0x2f018f6e34b5f9f9!8m2!3d33.6666574!4d73.0761395!16s%2Fg%2F11g8_15sjr?entry=ttu";
  window.open(mapUrl, "_blank");
};

const Map = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        console.log("mobile");
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dynamicContainerStyle = {
    width: "100%",
    height: "calc(50vh)",
  };
  return (
    <div className="h-[calc(50vh)] w-[calc(90vw)]">
      <LoadScript googleMapsApiKey={"AIzaSyA0Sb2g-IWQwyXbiPcbLA1TeYy-7akTtrc"}>
        <GoogleMap
          mapContainerStyle={dynamicContainerStyle}
          center={center}
          zoom={14}
          options={{
            // styles: [{ stylers: [{ saturation: 0 }] }],
            disableDefaultUI: true,
            gestureHandling: "greedy",
            scrollwheel: false,
            zoomControl: true,
          }}
        >
          <Marker position={center} onClick={handleMarkerClick} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
