import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchCategories from "./components/SearchCategories";
import SearchContextProvider from "./contexts/SearchContext";
import useFetch from "./useFetch";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import data from "./data";
import { randomNumber } from "./utilities/random";
// import Food from "./components/Food";
// import Mountain from "./components/Mountain";
// import Bird from "./components/Birds";
// import Beaches from "./components/Beaches";
function App() {
  const page = randomNumber();
  const { photos } = useFetch(
    `https://api.unsplash.com/photos?client_id=UDXe0X7kwY-_vsbi9agQUQ8v1CP5zAP53rztl63JEOI&page=1&per_page=12`
  );
  const myData = photos.map((item) => <Card key={item.id} img={item.img} />);

  return (
    <div className="App">
      <Header />
      <SearchContextProvider>
        <SearchCategories />
      </SearchContextProvider>
      <div className="result">{myData}</div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/?query=mountains" element={<Mountain />} />
          <Route path="/?query=beaches" element={<Beaches />} />
          <Route path="/query=birds" element={<Bird />} />
          <Route path="/?query=foods" element={<Food />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
