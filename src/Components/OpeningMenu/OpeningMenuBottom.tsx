import styled from "styled-components";
import { StyledOpeningMenu } from "./OpeningMenu";

const OpeningMenuBottom: React.FC = () => {
    return (
        <StyledOpeningMenu className="relative-menu">
            <section className="bottom-styled">Sign in</section>
            <section className="bottom-styled">Contact us</section>
            <section className="bottom-styled">Terms of Use</section>
        </StyledOpeningMenu>
    );
}

export default OpeningMenuBottom;
