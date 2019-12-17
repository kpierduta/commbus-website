import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyACXe8HurUeBrn3796pbzGIr-KAT0StmNE',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        className="section is-hidden-mobile"
        style={{
          background: '#e1eff2',
          height: `40rem`,
          padding: '0.4rem 0rem',
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 52.5121692, lng: -1.6867767 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 52.5121692, lng: -1.6867767 }} />
    )}
  </GoogleMap>
));

export default MyMapComponent;
