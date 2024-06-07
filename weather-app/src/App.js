import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard";
//import CurrentCity from "./components/WeatherCard/components/CurrentCity/CurrentCity";

const App = () => (
  <main className="flex h-screen w-svw items-center justify-center">
    {/* make the pic flex */}
    <BackgroundImage></BackgroundImage>
    <WeatherCard></WeatherCard>
  </main>
);

export default App;
