import React,{ Component, useState } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import hospitals from '../data/hospitals.json'
  
      function Map() {
      const [selectedHosptial, setSelectedHospital] = useState(null);
      return(
        <div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 47.6090 , lng: -122.332069 }}
        >
                {hospitals.map((hospital) => (      
                    <Marker 
                        key={hospital.HOSPITAL_ID}
                        position={{ 
                            lat: hospital.LAT,
                            lng: hospital.LNG
                        }}
                        onClick={() =>{
                          setSelectedHospital(hospital)
                        }}
                    />
                ))}
                { selectedHosptial && (
                  <InfoWindow
                  position={{ 
                    lat: selectedHosptial.LAT,
                    lng: selectedHosptial.LNG
                    }}
                  onCloseClick={() => {
                    setSelectedHospital(null);
                  }}                  
                  >
                    <div className="card-text">
                      <h2>{selectedHosptial.NAME}</h2>
                      <h3>Beds Available:</h3>
                      <p>Medical Beds: {selectedHosptial.BEDS["MED"]} </p>
                      <p>Tele Beds: {selectedHosptial.BEDS["TELE"]} </p>
                      <p>Neuro Beds: {selectedHosptial.BEDS["NEURO"]} </p>
                      <p>ICU Beds: {selectedHosptial.BEDS["ICU"]} </p>
                    </div>
                    </InfoWindow>
                )}
        </GoogleMap>
        </div>
      )
    }

  const MapWithAMarker = withScriptjs(withGoogleMap(Map));    

  export default function RenderMap(){ 
  return(
    <div>
        <div style= {{ width: '100vw', height: '100vh'}}>
            <MapWithAMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,
            drawing,places&key=AIzaSyBKj6h5qI5gWyw1gBqLdyI26nJINqe2xwA`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    </div>
        );
  }
  


