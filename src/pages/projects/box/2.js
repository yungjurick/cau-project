import React from "react";
import styled from "styled-components";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import Desc from "../../../components/desc";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team2";

export default () => {
  return (
    <ProjectLayout
      title="원(源)의 교회: 근본의 의미를 찾는 공간"
      names="이한선"
    >
      <Desc fw={400}>
        이웃 사랑을 중시하는 교회가 건축적으로는 아이러니하게 더 폐쇄적으로
        존재합니다.{" "}
        <span style={{ fontWeight: 800 }}>
          교회의 진정한 의미를 이루기 위해선, 이웃과 주변환경이 어우러져 다양한
          사람들을 포용 할 수 있는 보다 ‘열려있는’ 교회 건축 공간 디자인
        </span>
        이 필요합니다.
        <br />{" "}
        <span style={{ fontWeight: 800 }}>
          저는 교회와 주변 관계를 연결하는 리좀 개념을 디자인 컨셉으로 새로운
          교회 건축 공간을 제안하고자 합니다.
        </span>{" "}
        폐채석장의 장소성과 시간성을 살려 주변환경과 더불어 종교를 떠나서 누구나
        교회에 편안하게 스며들 수 있는 공간을 만들었습니다.
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

      <Zoom margin="0">
        <Image src={`${CDN}/4.png`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/5.png`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/6.png`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/7.png`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/8.png`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/9.png`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/10.png`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/11.png`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/12.png`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/13.png`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/14.png`} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
