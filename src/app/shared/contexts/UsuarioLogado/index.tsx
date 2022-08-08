import { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData{
    nomeDoUsuario: string;
    logout: () => void;
}

interface IUsuarioLogadoProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProps> = ({ children }) => {

    const handleLogout = useCallback(() => {
        console.log('Logout executou');
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Lucas', logout: handleLogout}}>
            { children }
        </UsuarioLogadoContext.Provider>
    );
}