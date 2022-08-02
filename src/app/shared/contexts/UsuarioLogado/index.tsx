import { createContext } from "react";

interface IUsuarioLogadoContextData{
    nomeDoUsuario: string;
}

interface IUsuarioLogadoProps {
    children: React.ReactNode;
}

const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProps> = ({ children }) => {

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Lucas' }}>
            { children }
        </UsuarioLogadoContext.Provider>
    );
}