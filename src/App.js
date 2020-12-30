import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import TinderCards from './components/TinderCards'
import SwipeButtons from './components/SwipeButtons'


function App() {
  return (
    <div className="App">
      <Header />
      {/* Header */}
      <TinderCards/>
      {/* Tinder cards */}
      <SwipeButtons/>
      {/* Swipe Buttons */}
    </div>
  );
}

export default App;
