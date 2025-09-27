import { HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <HashRouter>
        <Home />
      </HashRouter>
    </>
  );
}

export default App;
