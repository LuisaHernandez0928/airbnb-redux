import * as React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyDmlUVrjRuQNrd_p4CVZwLuziMmgn32nIo";

const libraries = ["places"];

function geocodePlaceId(placeId, geocoder, callback) {
  geocoder
    .geocode({ placeId: placeId })
    .then(({ results }) => {
      const lat = results[0].geometry.location.lat();
      const lng = results[0].geometry.location.lng();
      callback({
        status: "ok",
        data: {
          lat,
          lng,
        },
      });
    })
    .catch((e) => {
      callback({
        status: "error",
        msg: e,
      });
    });
}

function GoogleMaps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [center, setCenter] = React.useState({
    lat: 7.2905715,
    lng: 80.6337262,
  });

  const autocompleteService = React.useRef();
  const geocoder = React.useRef();

  React.useEffect(() => {
    if (!isLoaded) return;
    autocompleteService.current =
      new window.google.maps.places.AutocompleteService();
    geocoder.current = new window.google.maps.Geocoder();
  }, [isLoaded]);

  function coordinatesRetrieved(res) {
    if (res.status !== "ok") {
      console.log("ERROR LEYENDO LAT LONG");
      console.error(res.msg);
      return;
    }

    const { lat, lng } = res.data;
    console.log(lat, lng);
    setCenter({ lat, lng });
  }

  function getAutocompletions(input) {
    autocompleteService.current.getPlacePredictions(
      { input },
      function (results) {
        console.log(results);
        /*
        geocodePlaceId(
          results[0]["place_id"],
          geocoder.current,
          coordinatesRetrieved
        );
        */
      }
    );
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div style={{ height: "fit-content", width: "600px", overflow: "hidden" }}>
      <input
        style={{
          border: "1px solid black",
        }}
        type="text"
        onChange={(e) => {
          const str = e.target.value;
          getAutocompletions(str);
        }}
      />
      <div>hola</div>
      <div style={{ height: "600px", width: "600px", overflow: "hidden" }}>
        <GoogleMap
          zoom={5}
          center={center}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}

export { GoogleMaps };
