import Header from "./components/header";
import Create from "./components/Create";
import Article from "./components/Article";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import Register from "./components/Register";
import BlogDetails from "./components/BlogDetails";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  console.log(auth);
  return (
    // console.log(Auth)
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Article />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/blog/:id" element={<BlogDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
