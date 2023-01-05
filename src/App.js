import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchCategories from "./components/SearchCategories";
import SearchContextProvider from "./contexts/SearchContext";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import data from "./data";
// import Food from "./components/Food";
// import Mountain from "./components/Mountain";
// import Bird from "./components/Birds";
// import Beaches from "./components/Beaches";
function App() {
  const myData = data.map((item) => <Card key={item.id} img={item.img} />);

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
