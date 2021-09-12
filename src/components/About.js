import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SectionHeading } from "./misc/Headings.js";
import Slider from "react-slick";

const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full text-variant-500`;

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

const TestimonialsSliderII = styled(Slider)`
  ${tw`flex mt-4 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
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

const Image = tw.img`my-4 w-4/5 md:w-3/5`;

const About = ({ heading = "Nuestra historia" }) => {
  return (
    <div id="historia">
      <Container>
        <ThreeColumnContainer>
          <Heading>{heading}</Heading>
          <TestimonialsSlider>
            <Testimonial>
              <QuoteContainer>
                <Quote>
                  Empresa 100% mexicana, inició operaciones hace más de 8 años y
                  se dedica a la industria del turismo, principalmente para el
                  mercado mexicano. Proporciona servicios integrales de viajes
                  de placer.
                </Quote>
                <br />
                <Quote>
                  Nuestra división Mayorista diseña, publica, promociona y opera
                  tours a Estados Unidos, Canadá, Europa, Medio y Lejano Oriente
                  y Sudamérica. También tenemos interesantes destinos en la toda
                  la República Mexicana.
                </Quote>
              </QuoteContainer>
            </Testimonial>
          </TestimonialsSlider>
          <Image
            src="https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="historia"
          />
          <TestimonialsSliderII>
            <Testimonial>
              <QuoteContainer>
                <Quote>
                  Ofrecemos nuestros productos al público en general. Contamos
                  con una amplia sala de ventas atendida por más de 15 asesores
                  de viajes, soportada por un departamento de operaciones
                  conformado por expertos en viajes, los cuales son
                  continuamente capacitados y entrenados en el manejo de la
                  tecnología más avanzada, para que puedan prestar su atención y
                  asesoría con efectividad, eficiencia y amplios conocimientos
                  en sus respectivas áreas.
                </Quote>
                <br />
                <Quote>
                  Así mismo, actualmente contamos con 5 franquicias tanto en la
                  Ciudad de México como en las principales ciudades de la
                  República Mexicana.
                </Quote>
                <br />
                <Quote>
                  Continuamente nos esmeramos en perfeccionar los servicios que
                  otorgamos por lo que, a través de una estricta selección de
                  Aerolíneas, Navieras y Operadores Internacionales, podemos
                  garantizar la satisfacción de sus necesidades de viaje.
                </Quote>
              </QuoteContainer>
            </Testimonial>
          </TestimonialsSliderII>
        </ThreeColumnContainer>
      </Container>
    </div>
  );
};

export default About;
