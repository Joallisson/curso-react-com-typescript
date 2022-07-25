import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate(); //usando hook de navegação entre páginas

    const handleClick = () => {
        navigate("/pagina-inicial");
    }

    return(
        <div>
            <p>Login</p>
            <button onClick={handleClick}>Home</button>
        </div>
    );
}