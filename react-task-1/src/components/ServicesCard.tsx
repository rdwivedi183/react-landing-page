import React from 'react';
import styled from 'styled-components';

// Define the props interface for the ServicesCard component
interface ServicesCardProps {
  icon: string; // URL for the icon
  heading: string; // Heading for the service
  description: string; // Description for the service
}

// Styled components for the services card
const CardContainer = styled.div`
  border-radius: 10px;

  padding: 20px;
  width: 250px;
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

const Heading = styled.h3`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.textGray};
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.textGray};
`;

// ServicesCard component definition
const ServicesCard: React.FC<ServicesCardProps> = ({ icon, heading, description }) => {
  return (
    <CardContainer>
      <Icon src={icon} alt="Service Icon" />
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default ServicesCard;
