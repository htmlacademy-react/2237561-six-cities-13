import LoadingSpinnerComponent from 'react-spinners-components';

function Spinner() {

  return (
    <div style={{ textAlign: 'center', marginTop: '15%' }}>
      <h2>Loading ...</h2>
      <LoadingSpinnerComponent
        type={ 'Rolling' }
        colors={ [ '#0067a5'] }
        size={ '150px' }
      />
    </div>
  );
}

export default Spinner;
