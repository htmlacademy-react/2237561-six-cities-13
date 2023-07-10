import MainScreen from '../pages/main-screen/main';

type AppScreenProps = {
  citiesCardsCount: number;
}

function App({citiesCardsCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen citiesCardsCount= {citiesCardsCount} />
  );
}

export default App;
