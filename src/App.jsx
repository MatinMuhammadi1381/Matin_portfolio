import { LanguageProvider } from "./context/LanguageProvider";
import { Home } from "./pages/Home";

function App() {
  return (
    <LanguageProvider>
      <div className="site-shell">
        <Home />
      </div>
    </LanguageProvider>
  );
}

export default App;
