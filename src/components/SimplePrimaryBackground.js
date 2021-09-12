import React from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "./misc/Layouts.js";
import { SectionHeading } from "./misc/Headings.js";

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`;
const QuoteContainer = tw.div`relative`;
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`;

const SimplePrimaryBackground = () => {
  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          <Heading>Logística y Otras</Heading>
        </HeadingContainer>
        <TestimonialsSlider>
          <Testimonial>
            <QuoteContainer>
              <Quote>
                Ofreciendo también un servicio de Organización de eventos y
                convenciones tanto con fines turísticos como Empresariales.
                Proporcionando servicios logísticos en esta categoría como
                respuesta a la diversificación que hoy en día tanto el cliente
                como las empresas necesitan.
              </Quote>
              <br />
              <Quote>
                Relacionados con Servicios hoteleros y otras agencias de Viajes
                para una mejor cobertura en las necesidades empresariales;
                Transporte, recorridos y diversas actividades que también son
                ofertadas para cualquier cliente.
              </Quote>
            </QuoteContainer>
          </Testimonial>
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};

export default SimplePrimaryBackground;
