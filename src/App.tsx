import { BrowserRouter, Route, Routes } from "react-router-dom";
import Style from "./pages/style/Style.page";
import StyleMerging from "./pages/style/StyleMerging";
import StyleComposition from "./pages/style/StyleComposition";
import StyleVariants from "./pages/styleVariants/page";
import CreateVar from "./pages/createVar";
import CreateTheme from "./pages/createTheme";
import AssignVars from "./pages/assignVars";
import FallbackVar from "./pages/fallbackVar";
import CreateThemeContract from "./pages/createThemeContract";
import FontFace from "./pages/fontFace";
import KeyFrames from "./pages/keyframes";

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
        <Route path="/createvar">
          <Route path="" element={<CreateVar />} />
        </Route>
        <Route path="/createtheme">
          <Route path="" element={<CreateTheme />} />
        </Route>
        <Route path="/assignvars">
          <Route path="" element={<AssignVars />} />
        </Route>{" "}
        <Route path="/fallbackvar">
          <Route path="" element={<FallbackVar />} />
        </Route>
        <Route path="/contract">
          <Route path="" element={<CreateThemeContract />} />
        </Route>
        <Route path="/fontface">
          <Route path="" element={<FontFace />} />
        </Route>
        <Route path="/keyframes">
          <Route path="" element={<KeyFrames />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
