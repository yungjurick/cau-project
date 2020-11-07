import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src0 from "../../../static/images/projects/frame/team5/0.png";
import src1 from "../../../static/images/projects/frame/team5/1.png";
import src2 from "../../../static/images/projects/frame/team5/2.png";
import src3 from "../../../static/images/projects/frame/team5/3.png";
import src4 from "../../../static/images/projects/frame/team5/4.png";
import src5 from "../../../static/images/projects/frame/team5/5.png";
import src6 from "../../../static/images/projects/frame/team5/6.png";
import src7 from "../../../static/images/projects/frame/team5/7.png";
import src8 from "../../../static/images/projects/frame/team5/8.png";
import src9 from "../../../static/images/projects/frame/team5/9.png";
import src10 from "../../../static/images/projects/frame/team5/10.png";
import src11 from "../../../static/images/projects/frame/team5/11.png";
import src12 from "../../../static/images/projects/frame/team5/12.png";
import src13 from "../../../static/images/projects/frame/team5/13.png";
import src14 from "../../../static/images/projects/frame/team5/14.png";
import src15 from "../../../static/images/projects/frame/team5/15.png";
import src16 from "../../../static/images/projects/frame/team5/16.png";

export default () => {
  return (
    <ProjectLayout title="흉터" names="김명주 | 조민경">
      <Desc fw={400}>
        건축법 개정으로 강 위의 건축이 불가능해진 현재, 유진 상가는 서울에서
        유일하게 건물 아래로 강이 흐르는 주상복합건물이다. 강의 이름은
        홍제천으로 한강으로 향하는 서울의 큰 강줄기 중 하나다. 홍제천은 과거
        복개천이었으나 자연환경의 중요성이 커지면서 하천을 복구하는 사업(홍제
        유연)이 진행되었다. 이로 인해 최근 주거지 선택 요소로 급부상한
        ‘물세권’에 속하게 됐지만 낙후된 시설, 정돈되지 않은 주변, 부족한
        인지도는 유진 상가를 여전히 지역 흉물로 남아있게 했다. 우리는 건축구조적
        특징과 홍제천의 관계성을 이용해 하천 녹지공간의 이점을 피력하는 방향으로
        본 프로젝트를 제시한다.
      </Desc>

      <Zoom margin="4rem 0 0 0">
        <Image src={src0} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src1} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src2} />
      </Zoom>

      <Gif name="frameTeam51" />

      <Zoom margin="0">
        <Image src={src3} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src4} />
      </Zoom>

      <Gif name="frameTeam52" />

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

      <Zoom margin="0">
        <Image src={src13} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src14} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src15} />
      </Zoom>

      <Zoom margin="0">
        <Image src={src16} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
