import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../images/kiev_black.svg";

const Container = tw.div`relative bg-gray-900 text-gray-100 -mx-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-4 pb-8`;

const ImgContain = styled.div`
  ${tw`my-8`}
  img {
    ${tw`w-40 h-auto`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`;
const CopyrightNotice = tw.div``;
const CompanyInfo = tw.div``;

const Divider = tw.div`my-8 border-b-2 border-gray-800`;

const FiveColumnDark = () => {
  return (
    <Container>
      <Content>
        <ImgContain>
          <img src={LogoImage} alt="Kiev logo" />
        </ImgContain>
        <Divider />
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; 2021</CopyrightNotice>
          <CompanyInfo>viajes@servicioskiev.com</CompanyInfo>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};

export default FiveColumnDark;
