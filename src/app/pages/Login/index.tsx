import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { UsuarioLogadoContext } from "../../shared/contexts";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {

    const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

            <p>{nomeDoUsuario}</p>

            <p>Quantidade de caracteres no email: {emailLength}</p>
            <form>
                
                <InputLogin
                    label="Email"
                    value={email}
                    onChange={(newValue) => setEmail(newValue)} //Estou simplesmente passando o setEmail() para o componente
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    type="password"
                    value={password}
                    ref={inputPasswordRef}
                    onChange={newValue => setPassword(newValue)}
                />

                {/* <button onClick={handleEntrar} type="button">Entrar</button> */}

                <ButtonLogin onClick={handleEntrar} type="button">
                    Entrar
                </ButtonLogin>

                <ButtonLogin onClick={handleEntrar} type="button">
                    Cadastrar-se
                </ButtonLogin>
            </form>

        </div>
    );
}