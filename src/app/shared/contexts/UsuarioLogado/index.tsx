import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData{
    nomeDoUsuario: string;
    logout: () => void;
}

interface IUsuarioLogadoProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProps> = ({ children }) => {

    const [nome, setNome] = useState('testes');

    useEffect(() => {
        setTimeout(() => {
            setNome('Joallisson');
        }, 3000);
    }, []);

    const handleLogout = useCallback(() => {
        console.log('Logout executou');
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout}}>
            { children }
        </UsuarioLogadoContext.Provider>
    );
}