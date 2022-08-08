import { UsuarioLogadoContext } from '../../contexts/UsuarioLogado/index';
import { useContext } from 'react';


export const useUsuarioLogado = () => {
    const context = useContext(UsuarioLogadoContext);

    return context;
}