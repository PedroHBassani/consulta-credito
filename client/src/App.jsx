import { useState } from "react";
import "./App.css";
import FormPage from "./pages/form";
import ResultPage from "./pages/result";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <header>
        {page === "home" && <span>Preencha os dados do solicitante</span>}
        {page === "result" && <span>Resultado</span>}
      </header>

      {page === "home" && <FormPage setPage={setPage} />}
      {page === "result" && <ResultPage setPage={setPage} />}
    </>
  );
}

export default App;
