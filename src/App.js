import Header from "./header";
import Create from "./Create";
import Article from "./Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Article />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
