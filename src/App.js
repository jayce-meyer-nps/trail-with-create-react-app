import logo from './logo.svg';
import './App.css';
import NPMapTrail from '@npmap/trail'
import { useState } from 'react';

function App() {
  const [featureToShow, setFeatureToShow] = useState(null)
  const handleElementClicked = (elementObject) => {
    console.log('Received clicked feature: ', elementObject);
  }
  
  const mockFeature = `{
"type": "Feature",
"id": "30a1dc08-bd8f-a0da-8ccf-9a531fb1e08a",
"geometry": {
"type": "Point",
"coordinates": [
-105.56096926394572,
40.36623073671856
]
},
"properties": {
"ordinal": 2,
"significance": "Beaver Meadows Visitor Center",
"icon": "visitor-center",
"images": [
{
"description": "",
"url": "https://www.nps.gov/common/uploads/cropped_image/CD73067F-FB69-6336-B4948C4F856B9B78.jpg",
"credit": "NPS",
"altText": "A tent is set up in a wilderness campsite, a lake is visible through the trees",
"caption": "Wilderness Backpacking Camping",
"crops": [
{
"aspectRatio": 1.78,
"url": "https://www.nps.gov/common/uploads/cropped_image/primary/CD73067F-FB69-6336-B4948C4F856B9B78.jpg"
},
{
"aspectRatio": 1.33,
"url": "https://www.nps.gov/common/uploads/cropped_image/secondary/CD73067F-FB69-6336-B4948C4F856B9B78.jpg"
}
],
"type": "Images"
},
{
"url": "https://www.nps.gov/common/uploads/structured_data/1A5CE0AB-E2DD-F3B1-91994C572E7EE87F.jpg",
"credit": "NPS Photo",
"altText": "A brown angular building in the trees below snowy Longs Peak",
"caption": "Beaver Meadows Visitor Center features great views of Longs Peak.",
"type": "Images"
},
{
"url": "https://www.nps.gov/common/uploads/structured_data/1A66F48B-E909-C3A9-46A427C13CBD7811.jpg",
"credit": "NPS Photo",
"altText": "Visitors and rangers stand in a modernist building lobby.",
"caption": "The lobby of Beaver Meadows Visitor Center has beautiful light and interesting lines.",
"type": "Images"
}
],
"name": "Beaver Meadows Visitor Center",
"description": "Beaver Meadows Visitor Center is located west of Estes Park on U.S. Highway 36. The Rocky Mountain Conservancy Nature Store is located inside the visitor center building.",
"id": "30a1dc08-bd8f-a0da-8ccf-9a531fb1e08a"
}
}`;
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
            <button onClick={() => manuallyShowFeature(mockFeature)} style={{padding: '20px', marginRight: '10px'}}>Example of manually showing popup of feature</button>
          </div>
          
          <NPMapTrail 
            trailDataUrl={'https://svcdev.nps.gov/data/api/v1/sites?apikey=KXuXrDdge2Csv0xbC01JhhNNaDGcmICX&format=geojson&type=trail&select=relatedsites,images,icon,geometry,id,description,trailinfo,amenities&code=ROMO'}
            trailAlertsUrl={'https://svcdev.nps.gov/data/api/v1/trdx/feeds?apikey=KXuXrDdge2Csv0xbC01JhhNNaDGcmICX&format=geoJson'} // Optional - URL for trail alerts, defaults to all alerts from PROD
            featurePopupToShow={featureToShow} // Optional - Use to show a map popup for a feature (if contained in the data from trailDataUrl)
            elementClicked={handleElementClicked} // Optional. Use to capture a clicked map feature
            mapCssHeight={'100%'} // Optional, defaults to 98vh - if the parent element of the map uses "%" for height, then this cannot be a "%" value
            mapCssWidth={'100%'}  // Optional, defaults to 100%
            enableTrailAlerts={true}  // Optional, defaults to true
            enableTrailAlertsToggle={true}  // Optional, defaults to true (but relies on enableTrailAlerts being true)
          />
        </div>
      </div>
    </div>
  );
}

export default App;
