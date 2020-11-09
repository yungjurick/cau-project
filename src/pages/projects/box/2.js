import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/box/team2/1.png";
import src2 from "../../../static/images/projects/box/team2/2.png";
import src3 from "../../../static/images/projects/box/team2/3.png";
import src4 from "../../../static/images/projects/box/team2/4.png";
import src5 from "../../../static/images/projects/box/team2/5.png";
import src6 from "../../../static/images/projects/box/team2/6.png";
import src7 from "../../../static/images/projects/box/team2/7.png";
import src8 from "../../../static/images/projects/box/team2/8.png";
import src9 from "../../../static/images/projects/box/team2/9.png";
import src10 from "../../../static/images/projects/box/team2/10.png";
import src11 from "../../../static/images/projects/box/team2/11.png";
import src12 from "../../../static/images/projects/box/team2/12.png";

export default () => {
  return (
    <ProjectLayout
      title="원(源)의 교회: 근본의 의미를 찾는 공간"
      names="이한선"
    >
      <Zoom margin="0">
        <Image src={src1} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src2} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src3} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src4} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src5} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src6} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src7} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src8} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src9} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src10} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src11} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src12} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
