import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/box/team10/1.jpg";

export default () => {
  return (
    <ProjectLayout title="SPREAD OUT" names="안현정">
      <Desc fw={400}></Desc>

      <Zoom margin="4rem 0 0 0">
        <Image src={src1} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
