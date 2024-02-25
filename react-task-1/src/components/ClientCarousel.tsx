// ClientCarousel.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { clients } from '../data/data';
import { leftArrow, rightArrow } from '../Helper/assets';

// Sample client data


const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const SlideContainer = styled.div<{ slideIndex: number }>`
//   display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => -props.slideIndex * 100}%);
`;

const SlideItem = styled.div`
  flex: 0 0 100%;
  display: flex;
 
  justify-content: space-between;
  padding: 20px;
  text-align: center;
`;

const Message = styled.div`
  flex: 1;
  margin-top: 40px;
  fonr-sixe: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: 20px;
`;

const CarouselButton = styled.div`
   text-align: right;
   margin-right: 30px;
   position: relative;
  bottom: 45px;
`

const TextContainer = styled.div`
  text-align: left;
  padding: 0 100px 0px 100px;
  color: ${(props) => props.theme.colors.secondary};
`

const ClientCarousel: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex(prevIndex => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevSlide = () => {
    setSlideIndex(prevIndex => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
  };

  return (
    <Container>
      <SlideContainer slideIndex={slideIndex}>
        {clients.map((client, index) => (
          <SlideItem key={index}>
            {/* <h1>“</h1> */}
            <Image src={client.imageUrl} alt={`Client ${index + 1}`} />
           <TextContainer>
            {client.descrption}
           
            <Message>{client.name} {client.message}</Message>
           </TextContainer>
          </SlideItem>
        ))}
      <CarouselButton>
        <Image  onClick={handlePrevSlide} src={leftArrow} alt="" />
        <Image onClick={handleNextSlide} src={rightArrow} alt="" />
      </CarouselButton>
      </SlideContainer>
   
    </Container>
  );
};

export default ClientCarousel;
