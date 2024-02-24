import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { rightArrow } from '../Helper/assets';

// Define the type for a single blog post
interface BlogPost {
  imageUrl: string;
  title: string;
  description: string;
}

// Styled components for the blog section, card container, card, image, and description
const BlogSection = styled.section`
  background-color: #FBFBFB;
  padding: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
  margin-bottom: 140px;
`;

const Card = styled.div`
  position: relative;
  border-radius: 10px;
  width: 23%;
`;

const Image = styled.img`
  width: 100%;
  max-width: 366px;
  max-height: 450px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const DescriptionSec = styled.div`
    width: 220px;
    background: #ffff;
    position: absolute;
    bottom: -130px;
    padding: 10px;
    height: 233px;
    left: 22px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.textGray};
  font-family: 'Plus Jakarta Sans';
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.textGray};
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  line-height: 20px;
`;

const ButtonContainer = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
`

const ImageWrap = styled.img`
  float: right;
`

// Props interface for the Blog component
interface BlogProps {
  blogData: BlogPost[];
}

// Component definition
const Blog: React.FC<BlogProps> = ({ blogData }) => {
  return (
    <BlogSection>
      <h2>Our Blogs</h2>
      <CardContainer>
        {blogData.map((post, index) => (
          <Card key={index}>
            <Image src={post.imageUrl} alt={`Image ${index + 1}`} />
            <DescriptionSec>
              <Title>{post.title}</Title>
              <Description>{post.description}</Description>
              <ImageWrap src={rightArrow} alt="" />
            </DescriptionSec>
          
          </Card>
        ))}
        
      </CardContainer>
      <ButtonContainer>
        <Button label="View all posts" />
      </ButtonContainer>
    </BlogSection>
  );
};

export default Blog;
