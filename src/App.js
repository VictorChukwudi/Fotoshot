import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchCategories from "./components/SearchCategories";
import SearchContextProvider from "./contexts/SearchContext";
import useSearch from "./CustomHooks/useSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { randomNumber } from "./utilities/random";
// import data from "./data";
import { useState } from "react";
// import Food from "./components/Food";
// import Mountain from "./components/Mountain";
// import Bird from "./components/Birds";
// import Beaches from "./components/Beaches";
function App() {
  const page = randomNumber();
  const [searcher, setSearchState] = useState({
    state: false,
    text: "",
  });

  let url;
  if (!searcher.state) {
    url = `https://api.unsplash.com/photos?client_id=UDXe0X7kwY-_vsbi9agQUQ8v1CP5zAP53rztl63JEOI&page=${page}&per_page=12`;
  } else {
    url = `https://api.unsplash.com/search/photos?client_id=UDXe0X7kwY-_vsbi9agQUQ8v1CP5zAP53rztl63JEOI&page=1&query=${searcher.text}`;
  }
  const { photos } = useSearch(url);

  const myData = photos.map((item) => <Card key={item.id} img={item.img} />);

  return (
    <div className="App">
      <Header />
      <SearchContextProvider>
        <SearchCategories searchState={setSearchState} />
      </SearchContextProvider>

      <Router>
        <Routes>
          <Route path="/" element={<div className="result">{myData}</div>} />
          {/* <Route
            path="/search"
            element={<div className="result">{myData}</div>}
          /> */}
        </Routes>
      </Router>
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
