import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/frame/team2";

export default () => {
  return (
    <ProjectLayout title="Ex-change" names="최연호">
      <Desc fw={400}>
        수많은 사람들은 정신적, 심리적으로 큰 혼란을 겪는다. 그 중에서도 많은
        아이들은 정신적으로 감정적으로 불안감과 혼란을 겪고 있다.
        정신/감정적으로의 문제는 지금 당장 학교에서나 교우 관계에서나 더 나아가
        성인이 되었을 때 큰 문제를 불러 일으킨다.
      </Desc>

      <Desc fw={400}>
        그러나 이는 아이들의 잘못이 아니다. 유년 시절의 정신적인 문제는 어른들의
        도움으로 충분히 치유가 되고 좋은 프로그램의 유대적 관계 기반의 치료로
        아이들은 정신/감정적으로 성숙한 사람으로 발전할 수 있다. 과거의 불안하고
        혼란의 시기를 보낸 나를 새로이 변화시켜 유연한 사고와 정신적으로 성숙한
        사람으로 발전됨을 기약한다.
      </Desc>
      <Zoom margin="4rem 0 0 0">
        <Image src={`${CDN}/2.jpg`} />
      </Zoom>
      <Zoom margin="4rem 0 0 0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
