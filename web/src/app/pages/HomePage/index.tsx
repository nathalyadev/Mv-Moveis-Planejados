import { mainLogo,mainImage } from "../../shared/assets";
import { Header } from "../../shared/components";
import { HomePageContainer, Main } from "./styles";

export function HomePage () {
    return (
        <HomePageContainer>
        <Header/>

        <Main>
            <div className="content-logo">
                <img src={mainLogo} alt="" />
            </div>
            <div className="main-image-container">
                <img src={mainImage} alt="" />
            </div>
            <div>
                <h2>
                Móveis planejados para a sua cozinha, sala e quartros
                </h2>
            </div>
        </Main>
        </HomePageContainer>
    )
}