import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Style from "./pages/style/Style.page";
import StyleMerging from "./pages/style/StyleMerging";
import StyleComposition from "./pages/style/StyleComposition";
import StyleVariants from "./pages/styleVariants/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/style">
          <Route path="" element={<Style />} />
          <Route path="merging" element={<StyleMerging />} />
          <Route path="composition" element={<StyleComposition />} />
        </Route>
        <Route path="/stylevariants">
          <Route path="" element={<StyleVariants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
