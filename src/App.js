import logo from './logo.svg';
import './App.css';
import NPMapTrail from '@npmap/trail'
import { useState } from 'react';
import { 
  CUSTOM_ELEVATION_PROFILE_OPTIONS,
  MOCK_FEATURE_S_RIM_VISITOR_CENTER,
  MOCK_OAK_FLAT_TRAIL_ALERT_DATA,
  MOCK_OAK_FLAT_TRAIL_DATA_WITH_ELEVATION,
} from './mock-constants'
import NPElevationProfile from '@npmap/elevation-profile';

function App() {
  const [featureToShow, setFeatureToShow] = useState(null)
  const handleElementClicked = (elementObject) => {
    console.log('Received clicked feature: ', elementObject);
    const icon = NPMapTrail?.trailMap?.map?.style?.getImage('visitor-center');
    console.log(icon);
  }

  

  // Example of manually showing a feature/s popup on the map (if contained in the data from trailDataUrl)
  // NOTE: This will only work if the code using this can have "useState" (a React Component)
  // let featureToShow;
  const manuallyShowFeature = (f) => {
    setFeatureToShow(f);
  }

  return (
    <div className="App">
      <div className="App-header">
        <p className="header-text">NPMapTrail with create-react-app</p>

        <div className="map-container">
          <div className="left-side">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={() => manuallyShowFeature(MOCK_FEATURE_S_RIM_VISITOR_CENTER)} style={{padding: '20px', marginRight: '10px'}}>Example of manually showing popup of feature</button>
            <div id='test' style={{backgroundColor: 'white', color: 'black', width: '100%', marginRight: '5%'}}>
              <NPElevationProfile 
                dataUrl={MOCK_OAK_FLAT_TRAIL_DATA_WITH_ELEVATION}
                elevationProfileOptions={{
                  displayMetadata: true, 
                  chartTitleText: 'Elevation Details',
                  chartTitlePosition: 'top',
                  chartTitleAlignment: 'start',
                  chartTitlePadding: {bottom: '20'},
                  profileLineColor: 'darkgreen',
                  belowProfileLineColor: '#ccc6',
                  displayTooltip: true,
                  tooltipTextColor: '#fff',
                  tooltipBackgroundColor: '#000',
                  displayTooltipDistance: false,
                  displayTooltipElevation: true,
                  displayTooltipDPlus: false,
                  displayTooltipGrade: false,
                  crosshairLineColor: 'black',
                }}
              />
            </div>
          </div>
          
          <NPMapTrail 
            // trailDataUrl={'https://svcdev.nps.gov/data/api/v1/sites?apikey=KXuXrDdge2Csv0xbC01JhhNNaDGcmICX&format=geojson&type=trail&select=relatedsites,icon,geometry,id,description,trailinfo,amenities,images&code=ROMO'}
            trailDataUrl={MOCK_OAK_FLAT_TRAIL_DATA_WITH_ELEVATION}
            // trailAlertsUrl={'https://svcdev.nps.gov/data/api/v1/trdx/feeds?apikey=KXuXrDdge2Csv0xbC01JhhNNaDGcmICX&format=geoJson'} // Optional - URL for trail alerts, defaults to all alerts from PROD
            trailAlertsUrl={MOCK_OAK_FLAT_TRAIL_ALERT_DATA}
            featurePopupToShow={featureToShow} // Optional - Use to show a map popup for a feature (if contained in the data from trailDataUrl)
            elementClicked={handleElementClicked} // Optional. Use to capture a clicked map feature
            mapCssHeight={'100%'} // Optional, defaults to 98vh - if the parent element of the map uses "%" for height, then this cannot be a "%" value
            mapCssWidth={'100%'}  // Optional, defaults to 100%
            enableTrailAlerts={true}  // Optional, defaults to true
            enableTrailAlertsToggle={true}  // Optional, defaults to true (but relies on enableTrailAlerts being true)
            enableElevationProfile={true}  // Optional, defaults to true
            // elevationProfileOptions={CUSTOM_ELEVATION_PROFILE_OPTIONS} // Optional, has default styling
          />
        </div>
      </div>
    </div>
  );
}

export default App;
