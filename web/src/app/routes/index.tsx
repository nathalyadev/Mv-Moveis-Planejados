import {
    BrowserRouter,
    Routes as Switch,
    Route,
    Navigate,
} from "react-router-dom";
import { HomePage } from "../pages";
import { appConfigs } from "../shared/configs/app/index";
import { routesConfigs } from "../shared/configs/routes/index";


export function AppRoutes() {
    return (
        <BrowserRouter basename={appConfigs.BASENAME}>
            <Switch>
                <Route path={routesConfigs.HOMEPAGE} element={<HomePage />} />
                {/* <Route path={routesConfigs.PROJETOS} element={<HomePage />} /> */}
                <Route path="/*" element={<Navigate to={routesConfigs.HOMEPAGE} />} />
            </Switch>
        </BrowserRouter>
    )
}