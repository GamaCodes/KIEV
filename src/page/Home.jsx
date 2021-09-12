import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Hero from "../components/Hero";
import About from "../components/About";
import MainFeature from "../components/TwoColWithButton";
import Pricing from "../components/ThreePlansWithHalfPrimaryBackground";
import Testimonial from "../components/SimplePrimaryBackground";
import FAQ from "../components/TwoColumnPrimaryBackground";
import Footer from "../components/FiveColumnDark";
import misionSVG from "../images/mision.svg";
import visionSvg from "../images/vision.svg";

const Home = () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <About />
      <MainFeature
        subheading="Nosotros"
        heading="Nuestra Misión"
        imageSrc={misionSVG}
        buttonRounded={false}
        description="Ofrecer servicios turísticos al mercado mexicano que satisfagan
              las necesidades de viajes de placer, tanto al público en general
              como a las Agencias de Viajes en la República Mexicana, en
              destinos como Europa, Estados Unidos, Canadá, Sudamérica, Medio y
              Lejano Oriente, así como la zona del Sureste Mexicano y la Riviera
              Maya. Buscar constantemente superar las expectativas de nuestros
              clientes proporcionándoles, con un servicio esmerado, la justa
              relación calidad-precio.
              De la misma manera, proporcionar seguridad profesional a nuestros
              colaboradores y garantizar una productiva relación a nuestros
              socios comerciales."
      />
      <MainFeature
        subheading="Nosotros"
        heading="Nuestra Visión"
        imageSrc={visionSvg}
        buttonRounded={false}
        textOnLeft={false}
        description="En Operadora Turística Kiev le brindamos el mejor servicio de viajes de placer, así como
        atención a Convenciones y Viajes de Incentivo, de manera completamente personalizada,
        con atención exclusiva y apoyados en los más avanzados sistemas de cotización,
        reservaciones aéreas, hospedaje, renta de autos, etc., información y seguimiento de
        solicitudes."
      />
      <FAQ />
      <Pricing />
      <Testimonial />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Home;
