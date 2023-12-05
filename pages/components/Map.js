import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9icDkxMTEiLCJhIjoiY2xoYjBtb2duMGJ4azNkazRxeTVpNTN6YyJ9.2uMLBPyRsyiLyhcHVBQYyQ";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/robp9111/clhb13t2o00cp01pz5il89x91",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickUpCoordinates) {
      addToMap(map, props.pickUpCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickUpCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickUpCoordinates, props.dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickUpCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
