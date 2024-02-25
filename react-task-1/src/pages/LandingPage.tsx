import React from 'react';
import styled from 'styled-components';
import { customerLogos, mainImage } from '../Helper/assets';
import Button from '../components/Button';
import Blog from '../components/Blog';
import ServicesCard from '../components/ServicesCard';
import { blogData, servicesData } from '../data/data';
import ClientCarousel from '../components/ClientCarousel';


// Styled components for the section, left column, and right column
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
  text-align: center;
`;

// Styled components for the title and description
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 75.6px;
`;

const BrandHeading = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const Description = styled.p`
  font-size: 16px;
`;

const CustomerSec = styled.div`
    text-align: center;
`

const HeadingSec = styled.div`
  text-align: center;
`

const CardSection = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const ServicesSection = styled.div`
  background: ${(props) => props.theme.colors.background};
  padding: 20px;
`

const SubText = styled.p`
  margin-bottom: 35px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 18px;
`
const ButtonContainer = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
    margin-bottom: 30px;
`

const LandingPage: React.FC = () => {
  return (
    <>
    <div>
    <Section>
      <LeftColumn>
        <Title> Building Brands<br/>
            <BrandHeading> in the Digital Age</BrandHeading>
        </Title>
        <Description>
          Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.
        </Description>
        <Button label="Learn More" />
      </LeftColumn>
      <RightColumn>
        <img src={mainImage} alt="Your Image" />
      </RightColumn>
    </Section>
    <CustomerSec>
        <p>Powering next-gen companies</p>
        <img src={customerLogos} alt="Your Image" />
    </CustomerSec>
    </div>
     {/* Services section */}
    <ServicesSection>
   <HeadingSec>
   <h1>Explore Our Services</h1>
   <SubText>We are self-service data analytics software that lets you create visually.</SubText>
   </HeadingSec>
   <CardSection>
   {servicesData.map((item, index) => (
      <ServicesCard
      icon={item.imageUrl}
      heading={item.title}
      description={item.description}
    />
    ))}
       
   </CardSection>
   
   <ButtonContainer>
    <Button label="Learn More" />
   </ButtonContainer>
  
    
    </ServicesSection>
    <div>
      <ClientCarousel />
    </div>
    <div>
        <Blog blogData={blogData} />
    </div>
   
    </>
  );
};

export default LandingPage;
