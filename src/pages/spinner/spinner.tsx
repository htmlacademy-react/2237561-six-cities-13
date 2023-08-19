import LoadingSpinnerComponent from 'react-spinners-components';

function Spinner() {

  return (
    <div>
      <LoadingSpinnerComponent
        type={ 'Ripple' }
        colors={ [ '#06628d', 'blue'] }
        size={ '150px' }
      />
    </div>
  );
}

export default Spinner;
