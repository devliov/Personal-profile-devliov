import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultThemes } from "./styles/themes/default";
import { Home } from "./pages/home";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <Header />
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
