import { useContext } from "react";
import { UsuarioLogadoContext } from "../../../../shared/contexts";



interface IButtonLoginProps{
    type: "button" | "submit" | "reset";
    onClick: () => void;

    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {

    const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

    return(
        <button type={type} onClick={onClick}>
            {nomeDoUsuario} {children}
        </button>
    );
}