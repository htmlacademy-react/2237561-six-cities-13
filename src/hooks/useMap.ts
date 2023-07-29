import {useRef, useState, useEffect, MutableRefObject} from 'react';
import leaflet, {Map} from 'leaflet';
import {TLocation} from '../types/location';

const LAYER_OPTION = {
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  location: TLocation
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: location.zoom
      });

      leaflet
        .tileLayer(
          LAYER_OPTION.url,
          {attribution: LAYER_OPTION.attribution}
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}
