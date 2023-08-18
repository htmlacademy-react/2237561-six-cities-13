import LoadingSpinnerComponent from 'react-spinners-components';

function LoadingScreen() {

  return (
    <LoadingSpinnerComponent
      type={ 'Ripple' } colors={ [ '#06628d', 'purple'] } size={ '150px' }
    />
  );
}

export default LoadingScreen;
