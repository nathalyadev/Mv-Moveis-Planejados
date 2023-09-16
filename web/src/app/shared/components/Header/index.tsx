import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { routesConfigs } from "../../configs/routes";
import { NavigationHeader, DropDown } from "./styles";

export function Header() {

  return (
    <>
      <NavigationHeader>
        <div className="content-image">
          <img src={logo} alt="" />
        </div>

        <ul>
          <Link to={routesConfigs.HOMEPAGE}>
            <li>HOME</li>
          </Link>
          <Link to={routesConfigs.PROJETOS}>
            <li>Projetos</li>
          </Link>

          <DropDown className="dropdown">
            <li>Departamentos</li>
            <div className="dropdown-child">
              <Link to={routesConfigs.KITCHEN_DEPARTMENT}>
                <li>Cozinha</li>
              </Link>
              <Link to={routesConfigs.ROOM_DEPARTMENT}>
                <li>Sala</li>
              </Link>
              <Link to={routesConfigs.BEDROOM_DEPARTMENT}>
                <li>Quarto</li>
              </Link>
              <Link to={routesConfigs.BATHROOM_DEPARTMENT}>
                <li>Banheiro</li>
              </Link>
            </div>
          </DropDown>

          <Link to={routesConfigs.ABOUT_US}>
            <li>Sobre nós</li>
          </Link>
        </ul>
      </NavigationHeader>
    </>
  );
}
