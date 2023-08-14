import { useState } from 'react';
import { CITIES, DEFAULT_LOCATION } from '../../const';
import CitiesTabsItem from './cities-tabs-item';

function CitiesTabsSort(): JSX.Element {
  const [activeLocation, setActiveLocation] = useState(DEFAULT_LOCATION.name);

  const locationClickHandler = (name: string) => {
    setActiveLocation(name);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <CitiesTabsItem
              key={city.name}
              locationClickHandler={locationClickHandler}
              city={city}
              isActive={activeLocation === city.name}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabsSort;
