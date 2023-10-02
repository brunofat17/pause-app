import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import "react-social-icons/whatsapp";
import "react-social-icons/email";

import styled from "styled-components";
import HeaderLink from "../ui/HeaderLink";

const StyledHomepageHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: right;
  padding: 20px 40px;
  color: white;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Img = styled.img`
  width: 50%;
  max-width: 100%;
  max-height: 100%;
`;

function HomePage() {
  return (
    <>
      <StyledHomepageHeader>
        <HeaderLink>
          <SocialIcon
            href="tel:+351939954642"
            target="_blank"
            url="www.whatsapp.com"
          />
        </HeaderLink>
        <HeaderLink>
          <SocialIcon
            href="https://www.facebook.com/PauseStudioPT"
            target="_blank"
            url="www.facebook.com"
          />
        </HeaderLink>
        <HeaderLink>
          <SocialIcon
            href="https://www.instagram.com/pausestudiopt"
            target="_blank"
            url="www.instagram.com"
          />
        </HeaderLink>
      </StyledHomepageHeader>
      <StyledContainer>
        <Img src="/images/pause.jpeg" alt="pause-image" />
      </StyledContainer>
    </>
  );
}

export default HomePage;
