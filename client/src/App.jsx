import { useState } from "react";
import "./App.css";
import FormPage from "./pages/form";
import ResultPage from "./pages/result";

function App() {
  const [page, setPage] = useState("home");
  const [result, setResult] = useState("good");

  const onResult = (result) => {
    setPage("result");
    setResult(result);
  };

  return (
    <>
      <header>
        {page === "home" && <span>Preencha os dados do solicitante</span>}
        {page === "result" && <span>Resultado</span>}
      </header>

      {page === "home" && <FormPage onResult={(e) => onResult(e)} />}
      {page === "result" && <ResultPage setPage={setPage} risk={result} />}
    </>
  );
}

export default App;
