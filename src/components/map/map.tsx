import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';

import useMap from '../../hooks/useMap';
import {TLocation} from '../../types/location';
import {TOffer} from '../../types/offer';

type TMapProps = {
  location: TLocation;
  offers: TOffer[];
  selectedOffer: string | null;
  isMainMap?: boolean;
}

const defaultMarkerIcon = leaflet.icon({
  iconUrl: './img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

export default function Map({location, offers, selectedOffer, isMainMap}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude
            },
            {
              icon: (selectedOffer !== null && offer.id === selectedOffer)
                ? activeMarkerIcon
                : defaultMarkerIcon
            }
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className={cn('map', {
        'cities__map': isMainMap,
        'offer__map': !isMainMap
      })}
      ref={mapRef}
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',
        marginBottom: '50px',
      }}
    >
    </section>
  );
}
