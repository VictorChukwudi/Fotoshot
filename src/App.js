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
import useFetch from "./CustomHooks/useFetch";

function App() {
  const page_number = randomNumber();
  //State for default page and search bar
  const [searcher, setSearchState] = useState({
    state: false,
    text: "",
  });

  //State for categories nav
  const [category, setCategory] = useState("");
  let url = !searcher.state
    ? `https://api.unsplash.com/photos?client_id=UDXe0X7kwY-_vsbi9agQUQ8v1CP5zAP53rztl63JEOI&page=${page_number}&per_page=12`
    : `https://api.unsplash.com/search/photos?client_id=UDXe0X7kwY-_vsbi9agQUQ8v1CP5zAP53rztl63JEOI&page=${page_number}&query=${searcher.text}&per_page=12`;

  const { photos } = useSearch(url);
  const { images } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=UDXe0X7kwY-_vsbi9agQUQ8v1CP5zAP53rztl63JEOI&page=${page_number}&query=${category}&per_page=12`
  );

  const myData = photos.map((item) => <Card key={item.id} img={item.img} />);
  const categories = images.map((item) => (
    <Card key={item.id} img={item.img} />
  ));

  return (
    <div className="App">
      <Header />

      <Router>
        <SearchContextProvider>
          <SearchCategories
            searchState={setSearchState}
            category={setCategory}
          />
        </SearchContextProvider>
        <Routes>
          <Route path="/" element={<div className="result">{myData}</div>} />
          <Route
            path="/mountains"
            element={<div className="result">{categories}</div>}
          />
          <Route
            path="/beaches"
            element={<div className="result">{categories}</div>}
          />
          <Route
            path="/birds"
            element={<div className="result">{categories}</div>}
          />
          <Route
            path="/foods"
            element={<div className="result">{categories}</div>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
