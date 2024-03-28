import "./App.css";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 HOME 페이지
// 2. "/new" : 새로운 일기를 작성하는 NEW 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="*" element={<Notfound />} />
      {/* 정해지지 않은 경로가 있을 때 */}
    </Routes>
  );
}

export default App;
