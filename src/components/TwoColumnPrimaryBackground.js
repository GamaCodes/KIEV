import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading } from "./misc/Headings.js";

import defaultCardImage from "../images/shield-icon.svg";

import SupportIconImage from "../images/support-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomizeIconImage from "../images/customize-icon.svg";
import FastIconImage from "../images/fast-icon.svg";
import ReliableIconImage from "../images/reliable-icon.svg";
import SimpleIconImage from "../images/simple-icon.svg";
import Certs from "../images/certs.svg";
import Alianza from "../images/alianza.svg";
import Asesores from "../images/otros.svg";

const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full text-variant-500`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-variant-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

const TwoColumnPrimaryBackground = ({ cards = null }) => {
  const defaultCards = [
    {
      imageSrc: SupportIconImage,
      title: "Garantía y seriedad",
    },
    { imageSrc: ShieldIconImage, title: "Amplia variedad de destinos" },
    { imageSrc: SimpleIconImage, title: "Mejor relación calidad-precio" },
    { imageSrc: Asesores, title: "Asesores Especializados" },
    { imageSrc: FastIconImage, title: "Tecnología de punta" },
    { imageSrc: ReliableIconImage, title: "Cobertura nacional" },
    { imageSrc: CustomizeIconImage, title: "Promociones exclusivas" },
    { imageSrc: Alianza, title: "Alianzas comerciales" },
    {
      imageSrc: Certs,
      title: "Certficados por la Secretaría de Turismo",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Nuestras Fortalezas</Heading>
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <div className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </div>
              <span className="textContainer">
                <span className="title">{card.title}</span>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};

export default TwoColumnPrimaryBackground;
