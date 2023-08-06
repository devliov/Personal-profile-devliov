import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultThemes } from "./styles/themes/default";
import { Home } from "./pages/home";

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <div className="mainContainer" id="profile">
        <Home />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
