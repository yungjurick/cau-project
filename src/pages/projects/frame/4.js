import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/frame/team4/1.png";
import src2 from "../../../static/images/projects/frame/team4/2.png";
import src3 from "../../../static/images/projects/frame/team4/2.png";

import Video from "../../../components/video";

export default () => {
  return (
    <ProjectLayout title="레디메이드 방공호" names="윤자경 | 한혜인">
      <Desc fw={400}>
        버려진 채 잊혀진 경희궁 방공호, 버려진 채 폐기처분이 예정된 영화 소품들,
      </Desc>

      <Desc fw={400}>{`이들은 모두 <레디메이드>입니다.`}</Desc>

      <Desc fw={400}>
        버려진 영화소품을 활용하여 과거를 여행하며 일제강점기의 슬픔과 비극을
        체험하는 레디메이드 체험 전시관은 당신을 기다리고 있습니다.
      </Desc>

      <Desc fw={400}>시간여행의 주인공이 될 준비가 되셨나요?</Desc>

      <Zoom margin="4rem 0 0 0">
        <Image src={src1} />
      </Zoom>

      <Video
        style={{ margin: 0 }}
        src="https://www.youtube.com/embed/gciWzAe8Tsw"
      />

      <Zoom margin="0">
        <Image src={src2} />
      </Zoom>

      <Video
        style={{ margin: 0 }}
        src="https://www.youtube.com/embed/XXzm04F7POc"
      />

      <Zoom margin="0">
        <Image src={src3} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
