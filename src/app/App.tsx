import { Routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {
  return (
    <div className="App">
      <UsuarioLogadoProvider>
        <Routes/>
      </UsuarioLogadoProvider>
    </div>
  );
}
