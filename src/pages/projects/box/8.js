import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team8";

export default () => {
  return (
    <ProjectLayout title="BOX TO BOX" names="김현경">
      <Desc fw={400}>
        '코에 플라스틱이 박힌 바다거북', '고래의 갈라진 뱃속에서 나온 29kg의
        쓰레기' … 우리는 뉴스나 보도와 같은 매체를 통해 환경문제에 대한 심각성은
        인지하고 있지만, 당장 내일 마실 커피가 담겨 나오는 일회용 컵, 귀찮다는
        핑계로 구매하게 되는 배달음식 등으로 아무 거리낌 없이 일회용품을
        소비하고 있다. 설상가상으로 현재 코로나19로 인해 일회용품 사용이
        급증하고 있으며, 재활용품의 해외 수출이 끊겨 폐 플라스틱의 가격은
        떨어지고 있어 쓰레기들의 종착지가 점점 사라지고 있다. 심각한 환경적
        위기가 도래한 현 사회에서 환경에 대한 경각심을 미처 생활에 접목하지
        못하여 아무렇지 않게 일회용품을 소비하는 우리의 행동을 이 공간을 통해
        다시 생각해 보고 일회용품 사용에 대한 경각심을 자극하며 이와 밀접한
        환경과 소통할 수 있게 하여 개인 삶의 가치 함양과 그로 인한 영향을 깨우칠
        수 있게 해주는 전시·체험공간을 제안한다.
      </Desc>

      <Zoom margin="4rem 0 0 0">
        <Image src={`${CDN}/1.png`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/2.png`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/3.png`} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
