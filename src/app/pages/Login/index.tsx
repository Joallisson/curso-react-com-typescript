import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     if (window.confirm("Você é homem?")) {
    //         console.log("Homem");
    //     } else {
    //         console.log("Mulher");
    //     }
    // }, []);

    const emailLength = useMemo(() => {
        console.log("Executou");
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    return(
        <div>
            <p>Quantidade de caracteres no email: {emailLength}</p>
            <form action="">
                
                <InputLogin
                    label="Email"
                    value={email}
                    onChange={(newValue) => setEmail(newValue)} //Estou simplesmente passando o setEmail() para o coponente
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                    type="password"
                />

                <button onClick={handleEntrar} type="button">Entrar</button>
            </form>

        </div>
    );
}