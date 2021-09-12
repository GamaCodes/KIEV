import React from "react";
import tw from "twin.macro";
import HeaderBase from "./headers/light.js";
import {
  Container as ContainerBase,
  ContentWithVerticalPadding,
  Content2Xl,
} from "./misc/Layouts.js";
import { SectionHeading } from "./misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons.js";
import logoImageSrc from "../images/kiev_logotipo.svg";
import serverIllustrationImageSrc from "../images/turismo.svg";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(
  SectionHeading
)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight font-variante`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`;
const Span = tw.span`text-variant-500 font-variante`;
const SpanV = tw.span`text-primary-500 text-2xl font-sans`;

const ButtonPrimary = tw.div`flex justify-center`;

const Hero = ({ imageSrc = serverIllustrationImageSrc }) => {
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Header />
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <img src={logoImageSrc} alt="Kiev Logo" />
                <Heading>
                  Operadora Turística <SpanV>&</SpanV>
                  <Span> Servicios Logísticos</Span>
                </Heading>
                <ButtonPrimary>
                  <PrimaryButton as="a" href="#historia">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        height="25"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </PrimaryButton>
                </ButtonPrimary>
              </TextColumn>
              <IllustrationColumn>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};

export default Hero;
