import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "./misc/Headings.js";
import { SectionDescription } from "./misc/Typography.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl as ContentBase,
} from "./misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "../images/checkbox-circle.svg";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 -mx-8 px-8`;
const ContentWithPaddingXl = tw(
  ContentBase
)`relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Heading = tw(SectionHeading)`w-full text-variant-500`;
const Description = tw(SectionDescription)`w-full text-gray-300 text-center`;

const PlansContainer = tw.div`mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium`;
const Plan = styled.div`
  ${tw`w-full max-w-sm bg-white rounded-lg shadow-sm p-6 sm:p-10 lg:p-6 xl:p-10 mx-3 flex flex-col justify-between first:mt-0 lg:mt-0 shadow-raised`}
`;

const PlanFeatures = styled.ul`
  ${tw`flex-1 lg:-mx-6 -mx-6 sm:-mx-10 px-6 sm:px-10 xl:-mx-10`}
  .feature {
    ${tw`flex items-start first:mt-0`}
    .icon {
      ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-primary-900 tracking-wide ml-3`}
    }
  }
`;

const ThreePlansWithHalfPrimaryBackground = ({ plans = null }) => {
  const defaultPlans = [
    {
      description:
        "Perfect for when you want to host your personal blog or a hobby side project.",
      features: ["México", "Estados Unidos", "Canadá"],
    },
    {
      description:
        "Perfect for hosting blogs with lots of traffic or heavy development projects",
      features: ["Centroamérica", "Sudamérica", "Europa"],
    },
    {
      description:
        "Perfect for hosting production websites & API services with high traffic load",
      features: ["Medio Oriente", "Lejano Oriente", "Vuelta al Mundo"],
    },
  ];

  if (!plans) plans = defaultPlans;

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          <Heading>Destinos</Heading>
          <Description>
            Le ponemos a su disposición cualquier destino:
          </Description>
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <li className="feature" key={index}>
                    <CheckboxIcon className="icon" />
                    <span className="text">{feature}</span>
                  </li>
                ))}
              </PlanFeatures>
            </Plan>
          ))}
        </PlansContainer>
        <HeaderContainer>
          <Description>
            Operamos prácticamente todo el mundo, desde un sencillo fin de
            semana en algún lugar dentro de la República Mexicana, hasta una
            maravillosa Vuelta al Mundo.
          </Description>
          <Description>
            Nuestra vocación es poner la tecnología al servicio de todo el medio
            turístico y sus clientes.
          </Description>
        </HeaderContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default ThreePlansWithHalfPrimaryBackground;
