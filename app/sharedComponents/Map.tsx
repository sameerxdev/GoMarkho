"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 33.66686274838278,
  lng: 73.076182411446,
};

const handleMarkerClick = () => {
  const mapUrl =
    "https://www.google.com/maps/place/278+St+5,+Sector+C+Sector+B+DHA+Phase+6,+Lahore,+Punjab/@31.4672776,74.448089,17z/data=!4m6!3m5!1s0x391908dbab43f39d:0x4c2e17e3dfcbb041!8m2!3d31.4673344!4d74.4498704!16s%2Fg%2F11ggt5b4s_?entry=ttu";
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
