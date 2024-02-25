import React from 'react';
import styled from 'styled-components';
import { twitter, facebook, instagram } from '../Helper/assets';

const FooterContainer = styled.footer`
background-color: ${(props) => props.theme.colors.black};
  color:  ${(props) => props.theme.colors.white};
  padding: 60px 95px 60px 60px;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h4`
  font-size: 16px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  line-height: 40px;

  &:hover {
    text-decoration: underline;
  }
`;
const FooterText = styled.p`
  margin-bottom: 30px;
  max-width: 396px;
  font-size: 14px;
  line-height: 22px;
`;

const FooterImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 20px;
`;

const Footer: React.FC = () => {
  return (
 
<FooterContainer>
      <FooterSection>
        <FooterHeading>Digital Agency</FooterHeading>
        <FooterText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
        </FooterText>
        <div>
          <FooterImage src={twitter} alt="Image 1"  width="40" height="40" />
          <FooterImage src={facebook} alt="Image 2" />
          <FooterImage src={instagram} alt="Image 3" />
        </div>
      </FooterSection>
      <FooterSection>
        <FooterHeading>Company</FooterHeading>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Features</FooterLink>
        <FooterLink href="#">Works</FooterLink>
        <FooterLink href="#">Career</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterHeading>Help</FooterHeading>
        <FooterLink href="#">Customer Suppoer</FooterLink>
        <FooterLink href="#">Delivery Details</FooterLink>
        <FooterLink href="#">Terms & Conditions</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterHeading>Resources</FooterHeading>
        <FooterLink href="#">Free eBooks|</FooterLink>
        <FooterLink href="#">How to-Blog</FooterLink>

      </FooterSection>
    </FooterContainer>
   
      
  );
};

export default Footer;
