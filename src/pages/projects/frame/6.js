import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/frame/team6/1.png";
import src2 from "../../../static/images/projects/frame/team6/2.jpg";
import src3 from "../../../static/images/projects/frame/team6/3.jpg";
import src4 from "../../../static/images/projects/frame/team6/4.jpg";
import src5 from "../../../static/images/projects/frame/team6/5.jpg";
import src6 from "../../../static/images/projects/frame/team6/6.jpg";
import src7 from "../../../static/images/projects/frame/team6/7.jpg";

import Video from "../../../components/video";

export default () => {
  return (
    <ProjectLayout title="Dèsart" names="김미나 | 김혜진 | 윤수지">
      <Desc fw={400}>
        〔 des ; ~에서의,~로 혹은 여러 개의, 대단한 〕 + 〔 art ; 작품, 예술
        〕의 합성어.
      </Desc>

      <Desc fw={400}>
        Desart는 신진 예술가들의 작품 연대기를 사막 여행에 비유한 프로젝트로
        '예술로부터', '대단한 작품' 등의 의미로 해석이 가능하다.
      </Desc>

      <Zoom margin="4rem 0 0 0">
        <Image src={src1} />
      </Zoom>

      <Video
        style={{ margin: 0 }}
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

      <Video
        style={{ margin: 0 }}
        src="https://www.youtube.com/embed/b31qY6h7eoQ"
      />
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
