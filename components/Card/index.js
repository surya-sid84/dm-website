import styled from "styled-components";
import { backgroundUtility1 } from "../../assets/color";

const Card = ({ data }) => {
  return (
    <CardContainer>
      <ImageContainer src={data.imageUrl} alt="" />
      <CardTitle>{data.title}</CardTitle>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  background-color: ${backgroundUtility1["light"]};
  margin: 8px 14px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 0px 10px 1px ${backgroundUtility1["dark"]};
  }
`;

const ImageContainer = styled.img`
  width: 50px;
  height: 50px;
`;

const CardTitle = styled.p`
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
