import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Dashboard = () => {

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
                <label htmlFor="">
                    <span>Email</span>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        type="email"
                        onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
                    />
                </label>

                <label htmlFor="">
                    <span>Senha</span>
                    <input
                        ref={inputPasswordRef}
                        onChange={e => setPassword(e.target.value)} 
                        value={password} 
                        type="password" 
                    />
                </label>

                <button onClick={handleEntrar} type="button">Entrar</button>
            </form>

        </div>
    );
}