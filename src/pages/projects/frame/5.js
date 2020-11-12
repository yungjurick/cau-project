import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/frame/team5";

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
        <Image src={`${CDN}/0.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/2.jpg`} />
      </Zoom>

      <Gif src={`${CDN}/m.gif`} />

      <Zoom margin="0">
        <Image src={`${CDN}/3.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/4.jpg`} />
      </Zoom>

      <Gif src={`${CDN}/m2.gif`} />

      <Zoom margin="0">
        <Image src={`${CDN}/5.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/6.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/7.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/8.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/9.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/10.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/11.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/12.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/13.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/14.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/15.jpg`} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
