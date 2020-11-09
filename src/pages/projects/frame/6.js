import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/frame/team6/1.jpg";
import src2 from "../../../static/images/projects/frame/team6/1.png";
import src3 from "../../../static/images/projects/frame/team6/2.png";
import src4 from "../../../static/images/projects/frame/team6/3.png";
import src5 from "../../../static/images/projects/frame/team6/4.png";
import src6 from "../../../static/images/projects/frame/team6/5.png";
import src7 from "../../../static/images/projects/frame/team6/6.png";
import src8 from "../../../static/images/projects/frame/team6/7.png";
import src9 from "../../../static/images/projects/frame/team6/8.png";
import src10 from "../../../static/images/projects/frame/team6/9.png";
import src11 from "../../../static/images/projects/frame/team6/10.png";
import src12 from "../../../static/images/projects/frame/team6/11.png";

import Video from "../../../components/video";

export default () => {
  return (
    <ProjectLayout title="Dèsart" names="김미나 | 김혜진 | 윤수지">
      <Desc fw={400}>
        아파트 공화국이라고 불리는 대한민국 최초의 아파트는 1930년대 지어진 90년
        역사의 충정아파트이다. 6.25전쟁도 겪어낸 살아있는 근대 건축물이지만
        오래된 역사에 비해 부실하고 낡은 내외관과 주민 간 갈등으로 인해
        거주민들은 점차 충정아파트를 떠나가며 아파트로서 의미를 잃어가고 있다.
        대한민국 최초의 아파트이지만 잊혀져가는 그늘진 충정아파트에 새로운
        발걸음을 유입하여 기존의 가치를 되살려주고자한다.
      </Desc>

      <Zoom margin="4rem 0 0 0">
        <Image src={src1} />
      </Zoom>

      <Video
        style={{ margin: "4rem 0" }}
        src="https://www.youtube.com/embed/b31qY6h7eoQ"
      />

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
