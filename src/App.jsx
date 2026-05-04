import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
