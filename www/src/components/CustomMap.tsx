import { Map, Marker } from '@vis.gl/react-google-maps';

import { StoreLocation } from '~/types/coffeeShop';

const CustomMap = ({ location }: { location: StoreLocation }) => {
  const markerLocation = {
    lat: location.coordinates[1],
    lng: location.coordinates[0]
  };

  return (
    <div className="flex w-full h-full justify-center">
      <div className="flex p-5 h-72 w-80 sm:h-96 sm:w-1/3 rounded-2xl overflow-hidden">
        <Map
          defaultZoom={13}
          defaultCenter={markerLocation}
          gestureHandling="greedy"
          disableDefaultUI
        >
          <Marker position={markerLocation} />
        </Map>
      </div>
    </div>
  );
};

export default CustomMap;
