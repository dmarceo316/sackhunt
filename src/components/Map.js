import React,{  useState } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import { useSelector } from 'react-redux';
  
      function Map() {
      //selectors for hosptial states on redux 
      const [selectedSWMCCH, setSelectedSWMCCH] = useState(null);
      const [selectedSWMCFH, setSelectedSWMCFH] = useState(null);
      const SWMCCH = useSelector(state => state.SWMCCH);
      const SWMCFH = useSelector(state => state.SWMCFH);

      

      //SWMCFH
      //total medical beds
      const totalMed = SWMCFH.availableBeds.med.A14 + SWMCFH.availableBeds.med.A13 + SWMCFH.availableBeds.med.A12 + SWMCFH.availableBeds.med.B19 +
      SWMCFH.availableBeds.med.B24 + SWMCFH.availableBeds.med.B27 + SWMCFH.availableBeds.med.C10 + SWMCFH.availableBeds.med.C11 + SWMCFH.availableBeds.med.C16 + SWMCFH.availableBeds.med.D12
      // total tele beds 
      const totalTele = SWMCFH.availableBeds.tele.A20  + SWMCFH.availableBeds.tele.A24 + SWMCFH.availableBeds.tele.B03 + SWMCFH.availableBeds.tele.B04 + SWMCFH.availableBeds.tele.B05
      //total ICU beds
      const totalIcu = SWMCFH.availableBeds.icu.C01 + SWMCFH.availableBeds.icu.C02 + SWMCFH.availableBeds.icu.C06 
      // variables for beds 
      const totalBeds = 18
      const totalMedBed = 10
      const totalTeleBed = 5
      const totalIcuBed = 3
      const SWMCFHBeds =  totalMed  + totalTele + totalIcu
      const totalCapacity = SWMCFHBeds / totalBeds * 100
      const medCapacity = totalMed / totalMedBed * 100
      const teleCapacity = totalTele / totalTeleBed * 100
      const icuCapacity = totalIcu / totalIcuBed * 100 
      const roundedIcu = Math.round(icuCapacity / 1)
      const rounded = Math.round(totalCapacity / 1) 
      
      //SWMCCH
      //total SWMCCH medical beds
      const SWMCCHtotalMed = SWMCCH.availableBeds.med.CHA01 + SWMCCH.availableBeds.med.CHA02 + SWMCCH.availableBeds.med.CHA03 + SWMCCH.availableBeds.med.CHB01 +
      SWMCCH.availableBeds.med.CHB02 + SWMCCH.availableBeds.med.CHB03 + SWMCCH.availableBeds.med.CHC01 + SWMCCH.availableBeds.med.CHC02 + SWMCCH.availableBeds.med.CHC03 + SWMCCH.availableBeds.med.CHD01
      const SWMCCHtotalTele = SWMCCH.availableBeds.tele.CHA01  + SWMCCH.availableBeds.tele.CHA02 + SWMCCH.availableBeds.tele.CHB01 + SWMCCH.availableBeds.tele.CHB02 + SWMCCH.availableBeds.tele.CHB03
      //total SWMCCH ICU beds
      const SWMCCHtotalIcu = SWMCCH.availableBeds.icu.CHC01 + SWMCCH.availableBeds.icu.CHC02 + SWMCCH.availableBeds.icu.CHC03
      // variables SWMCCH for beds 
      const SWMCCHtotalBeds = 18
      const SWMCCHtotalMedBed = 10
      const SWMCCHtotalTeleBed = 5
      const SWMCCHtotalIcuBed = 3
      const SWMCCHBeds =  SWMCCHtotalMed  + SWMCCHtotalTele + SWMCCHtotalIcu
      const SWMCCHtotalCapacity = SWMCCHBeds / SWMCCHtotalBeds * 100
      const SWMCCHmedCapacity = SWMCCHtotalMed / SWMCCHtotalMedBed * 100
      const SWMCCHteleCapacity = SWMCCHtotalTele / SWMCCHtotalTeleBed * 100
      const SWMCCHicuCapacity = SWMCCHtotalIcu / SWMCCHtotalIcuBed * 100 
      const SWMCCHroundedIcu = Math.round(SWMCCHicuCapacity / 1)
      const SWMCCHrounded = Math.round(SWMCCHtotalCapacity / 1) 

        
      return(
        <div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 47.6090 , lng: -122.332069 }}
        >

            <Marker
            key={SWMCCH.id}
            position={{
              lat: SWMCCH.LAT,
              lng: SWMCCH.LNG
            }}
            onClick={() =>{
              setSelectedSWMCFH(SWMCFH)
            }}
            />
                { selectedSWMCFH && (
                  <InfoWindow
                  position={{ 
                    lat: selectedSWMCFH.LAT,
                    lng: selectedSWMCFH.LNG
                    }}
                  onCloseClick={() => {
                    setSelectedSWMCFH(null);
                  }}                  
                  >
                    <div className="card-text">
                      <h2>{selectedSWMCFH.name}</h2>
                      <h3>Availability: {rounded}%</h3>
                      <p>Med: {medCapacity}%</p>
                      <p>Tele: {teleCapacity}%</p>
                      <p>ICU: {roundedIcu}%</p>
                    </div>
                    </InfoWindow>
                )}

            <Marker
            key={SWMCFH.id}
            position={{
              lat: SWMCFH.LAT,
              lng: SWMCFH.LNG
            }}
            onClick={() =>{
              setSelectedSWMCCH(SWMCCH)
            }}
            />
                { selectedSWMCCH && (
                  <InfoWindow
                  position={{ 
                    lat: selectedSWMCCH.LAT,
                    lng: selectedSWMCCH.LNG
                    }}
                  onCloseClick={() => {
                    setSelectedSWMCCH(null);
                  }}                  
                  >
                    <div className="card-text">
                      <h2>{selectedSWMCCH.name}</h2>
                      <h3>Availability: {SWMCCHrounded}%</h3>
                      <p>Med: {SWMCCHmedCapacity}%</p>
                      <p>Tele: {SWMCCHteleCapacity}%</p>
                      <p>ICU: {SWMCCHroundedIcu}%</p>
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
  


