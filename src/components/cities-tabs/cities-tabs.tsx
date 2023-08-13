import { CITIES } from '../../const';
import CitiesTabsItem from './cities-tabs-item';

function CitiesTabsSort(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((location) => (
            <CitiesTabsItem
              key={location.name}
              location={location}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabsSort;
