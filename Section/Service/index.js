import styled from "styled-components";
import React from "react";
import { Container, InnerContainer } from "../../pages";
import Card from "../../components/Card";
const services = [
  {
    title: "Android Development",
    content: "",
    imageUrl: "/images/android-development.png",
  },
  {
    title: "Animation Video",
    content: "",
    imageUrl: "/images/animation-video.png",
  },
  {
    title: "Festive Gretting",
    content: "",
    imageUrl: "/images/festive_gretting.png",
  },
  {
    title: "Graphic Design",
    content: "",
    imageUrl: "/images/graphic-design.png",
  },
  {
    title: "Logo Design",
    content: "",
    imageUrl: "/images/logo-design.png",
  },
  {
    title: "Product Shoot",
    content: "",
    imageUrl: "/images/product-shoot.png",
  },
  {
    title: "Professional Videos",
    content: "",
    imageUrl: "/images/professional-videos.png",
  },
  {
    title: "Social Media Marketing",
    content: "",
    imageUrl: "/images/social_media_marketting.png",
  },
  {
    title: "Stargy Planning",
    content: "",
    imageUrl: "/images/stargy_planning.png",
  },
  { title: "Web Creation", content: "", imageUrl: "/images/web_creation.png" },
];

const Service = () => {
  return (
    <Container id="services">
      <InnerContainer>
        <ServiceContainer>
          <Title>Services</Title>
          <SubTitle>
            We consider ourselves explorers, constantly on the path to learning
            more about the latest developments shaping our digital ecosystem and
            how we can mould ourselves to be a part of it.
          </SubTitle>
          <ServiceLogoContainer>
            {services.map((service, i) => (
              <Card data={service} key={i} />
            ))}
          </ServiceLogoContainer>
        </ServiceContainer>
      </InnerContainer>
    </Container>
  );
};

export default Service;

const ServiceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.p`
  max-width: 80%;
  text-align: center;
  margin: 8px 0px;
  opacity: 0.8;
`;

const Title = styled.h1`
  font-weight: 900;
`;

const ServiceLogoContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
