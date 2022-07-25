import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<Dashboard/>} />
                <Route path="/entrar" element={<Login/>}/>

                <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
            </Switch>
        </BrowserRouter>
    );
}