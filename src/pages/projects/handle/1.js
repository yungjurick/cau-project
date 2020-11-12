import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Video from "../../../components/video";
import Zoom from "../../../components/zoom";

export default () => {
  return (
    <ProjectLayout title="Flex_us '20대를 전시하다'" names="박준수 | 박충실">
      <Desc fw={400}>
        Flex_us라는 제목과 ‘20대를 전시하다’라는 주제에서 알 수 있듯, 이
        프로젝트는 현재 20대로 살아가는 우리들의 공간과 시간 그리고 생각들을
        반영한 이야기이다. 처음으로 사회에 스스로 발을 내딛고 ‘홀로서기’를 통해
        겪게 되는 걱정과 고민 그리고 많은 경험들은 ‘나’라는 존재가 과연
        누구인지에 대해 생각해보는 ‘정체성’을 찾는 과정이다. 이러한 20대의
        시간을 살아가면서 가지고 있던 내면의 이야기를 꺼내 소통할 수 있는 공간을
        만들어 보는 것이다. 20대를 이야기하기 위한 전시는 그들만이 가진 특징을
        반영한 공간이 필요했고, ‘새로운 세포’라는 디자인 컨셉을 통해 풀어
        나갔다. 또한 전시가 이루어질 사이트는 기존의 전시공간의 목적으로
        사용되는 곳이 아닌 새로움을 줄 수 있고 다양한 세대가 이용하는 공간을
        선정하였다. 사회적인 관계와 소통을 통해 서로 이해하며 정체성을 찾아가는
        청년들의 공간과 시간 그리고 생각들이 이 프로젝트에 담겨있다.
      </Desc>
      <Zoom>
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team1/flex_us.jpg" />
      </Zoom>
      <Video src="https://youtube.com/embed/jWNx_b73Xlk" />
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
