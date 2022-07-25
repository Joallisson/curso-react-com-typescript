import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const navigate = useNavigate(); //usando hook de navegação entre páginas

    const handleClick = () => {
        navigate("/entrar");
    }

    return(
        <div>
            <p>Dashboard</p>
            <button onClick={handleClick}>Entrar</button>
        </div>
    );
}