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
      const [selectedOVL, setSelectedOVL] = useState(null)
      const SWMCCH = useSelector(state => state.SWMCCH);
      const SWMCFH = useSelector(state => state.SWMCFH);
      const OVL = useSelector(state => state.OVL)
      

      //SWMCFH
      // staffing values
      const LPNStaff = SWMCFH.staff.LPN;
      const RNStaff = SWMCFH.staff.RN;
      const CNAStaff = SWMCFH.staff.CNA;
      const availableStaff = LPNStaff + RNStaff + CNAStaff;

      // total staffing values
      const totalLPN = 2;
      const totalRN = 3;
      const totalCNA = 5;
      const totalStaff = totalLPN + totalRN + totalCNA; 

      // staffing percentage 
      const SWMCFHStaff = availableStaff / totalStaff * 100;
      const SWMCFHstaffMessage = SWMCFHStaff <= 50 ? <h1>Due to staffing, Bed availbilty will be affected. Please call to see availabilty</h1> : null 
      const SWMCFHmessage = SWMCFH.staff.message

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
        // staffing values
        const SWMCCHLPNStaff = SWMCCH.staff.LPN;
        const SWMCCHRNStaff = SWMCCH.staff.RN;
        const SWMCCHCNAStaff = SWMCCH.staff.CNA;
        const SWMCCHavailableStaff = SWMCCHLPNStaff + SWMCCHRNStaff + SWMCCHCNAStaff
    
        // total staffing values
        const SWMCCHtotalLPN = 2
        const SWMCCHtotalRN = 3
        const SWMCCHtotalCNA = 5
        const SWMCCHtotalStaff = SWMCCHtotalLPN + SWMCCHtotalRN + SWMCCHtotalCNA 
    
        // staffing percentage 
        const SWMCCHStaff = SWMCCHavailableStaff / SWMCCHtotalStaff * 100

        const SWMCCHmessage = SWMCCH.staff.message


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

      //OVL
        // staffing values
        const OVLLPNStaff = OVL.staff.LPN;
        const OVLRNStaff = OVL.staff.RN;
        const OVLCNAStaff = OVL.staff.CNA;
        const OVLavailableStaff = LPNStaff + RNStaff + CNAStaff
    
        // total staffing values
        const OVLtotalLPN = 2
        const OVLtotalRN = 3
        const OVLtotalCNA = 5
        const OVLtotalStaff = OVLtotalLPN + OVLtotalRN + OVLtotalCNA 
    
        // staffing percentage 
        const OVLStaff = OVLavailableStaff / OVLtotalStaff * 100
        const OVLstaffMessage = OVLStaff <= 50 ? <h1>Due to staffing, Bed availbilty will be affected. Please call to see availabilty</h1> : null 
        const OVLmessage = OVL.staff.message

    
        // will turn string into int for staffing
        const parse = value => (isNaN(parseFloat(value)) ? "" : parseFloat(value));

    //total medical beds
    const OVLtotalMed = OVL.availableBeds.med.OVLA01 + OVL.availableBeds.med.OVLA02 + OVL.availableBeds.med.OVLA03 + OVL.availableBeds.med.OVLB01 +
    OVL.availableBeds.med.OVLB02 + OVL.availableBeds.med.OVLB03 + OVL.availableBeds.med.OVLC01 + OVL.availableBeds.med.OVLC02 + OVL.availableBeds.med.OVLC03 + OVL.availableBeds.med.OVLD01
    const OVLtotalTele = OVL.availableBeds.tele.OVLA01  + OVL.availableBeds.tele.OVLA02 + OVL.availableBeds.tele.OVLB01 + OVL.availableBeds.tele.OVLB02 + OVL.availableBeds.tele.OVLB03
    //total ICU beds
    const OVLtotalIcu = OVL.availableBeds.icu.OVLC01 + OVL.availableBeds.icu.OVLC02 + OVL.availableBeds.icu.OVLC03
    // variables for beds 
    const OVLtotalBeds = 18
    const OVLtotalMedBed = 10
    const OVLtotalTeleBed = 5
    const OVLtotalIcuBed = 3
    const OVLBeds =  OVLtotalMed  + OVLtotalTele + OVLtotalIcu
    const OVLtotalCapacity = OVLBeds / OVLtotalBeds * 100
    const OVLmedCapacity = OVLtotalMed / OVLtotalMedBed * 100
    const OVLteleCapacity = OVLtotalTele / OVLtotalTeleBed * 100
    const OVLicuCapacity = OVLtotalIcu / OVLtotalIcuBed * 100 
    const OVLroundedIcu = Math.round(OVLicuCapacity / 1)
    const OVLrounded = Math.round(OVLtotalCapacity / 1) 

        
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
                      <h3>Staffing {SWMCFHStaff}%</h3>
                      <h4 className="warning-text">{SWMCFHmessage}</h4>
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
                      <h3>Staffing: {SWMCCHStaff}</h3>
                      <h4 className="warning-text">{SWMCCHmessage}</h4>
                    </div>
                    </InfoWindow>
                )}

            <Marker
            key={OVL.id}
            position={{
              lat: OVL.LAT,
              lng: OVL.LNG
            }}
            onClick={() =>{
              setSelectedOVL(OVL)
            }}
            />
                { selectedOVL && (
                  <InfoWindow
                  position={{ 
                    lat: selectedOVL.LAT,
                    lng: selectedOVL.LNG
                    }}
                  onCloseClick={() => {
                    setSelectedOVL(null);
                  }}                  
                  >
                    <div className="card-text">
                      <h2>{selectedOVL.name}</h2>
                      <h3>Availability: {OVLrounded}%</h3>
                      <h3>Staffing: {OVLStaff}</h3>
                      <h4 className="warning-text">{OVLmessage}</h4>
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
  


