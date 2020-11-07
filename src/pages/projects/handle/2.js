import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import WrapForTeam from "../../../components/wrapForTeam";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/handle/team2/1.png";
import src2 from "../../../static/images/projects/handle/team2/2.png";

export default () => {
  return (
    <ProjectLayout title="RE-ving" names="정민지 | 권희영">
      <Desc fw={400}>
        RE-ving은 온라인 중고 시장과 차별화된 마케팅 전략으로 꺼져가는 오프라인
        중고 시장과 중고품 소비문화를 활성화시키기 위해 만들어진 공간이다.
        일반적인 중고마켓처럼 판매 공간에 그 목적을 두지 않고,
        'playground'라는 컨셉으로 판매와 더불어 중고품을 중심으로 한 다양한
        문화적 콘텐츠를 경험할 수 있는 공간으로 계획하였다. 친환경 활동을
        경험하고 체험할 수 있는 다양한 공간과 중고품 판매 공간을 연계하였고
        소비자들에게 마치 놀이터에 온 듯한 즐거운 경험을 제공하고 중고품
        소비문화에 대한 새로운 라이프스타일과 트렌드를 자연스럽게 소개하고
        창출하는 공간으로서의 역할을 다 할 수 있도록 디자인하였다.
      </Desc>
      <WrapForTeam top="8%" src="https://www.youtube.com/embed/kyrUe9C9n1Q">
        <Zoom>
          <Image src={src1} />
        </Zoom>
        <Zoom>
          <Image src={src2} />
        </Zoom>
      </WrapForTeam>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
