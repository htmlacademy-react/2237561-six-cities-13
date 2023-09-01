import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';

import useMap from '../../hooks/use-map';
import {TCity} from '../../types/city';
import {TOffer} from '../../types/offer';

type TMapProps = {
  city: TCity;
  offers: TOffer[];
  selectedOffer: string | null;
  isMainMap?: boolean;
}

const defaultMarkerIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [14, 40]
});

const activeMarkerIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [14, 40]
});

export default function Map({city, offers, selectedOffer, isMainMap}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const {latitude, longitude, zoom} = city.location;
      map.setView([latitude, longitude], zoom);
      const markerGroup = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && selectedOffer === offer.id
              ? activeMarkerIcon
              : defaultMarkerIcon
          )
          .addTo(markerGroup);
      });
      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [city.location, map, offers, selectedOffer]);

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
