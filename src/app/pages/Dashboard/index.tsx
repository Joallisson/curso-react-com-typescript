import { useState } from "react";

export const Dashboard = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEntrar = () => {
        console.log(`Email: ${email}   Password: ${password}`);
    }

    return(
        <div>
            <form action="">
                <label htmlFor="">
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                </label>

                <label htmlFor="">
                    <span>Senha</span>
                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" />
                </label>

                <button onClick={handleEntrar} type="button">Entrar</button>
            </form>

        </div>
    );
}