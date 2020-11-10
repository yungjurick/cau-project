import React from "react";
import styled from "styled-components";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/box/team2/1.png";
import src2 from "../../../static/images/projects/box/team2/2.png";
import src3 from "../../../static/images/projects/box/team2/3.png";
import src4 from "../../../static/images/projects/box/team2/4.png";
import src5 from "../../../static/images/projects/box/team2/5.png";
import src6 from "../../../static/images/projects/box/team2/6.png";
import src7 from "../../../static/images/projects/box/team2/7.png";
import src8 from "../../../static/images/projects/box/team2/8.png";
import src9 from "../../../static/images/projects/box/team2/9.png";
import src10 from "../../../static/images/projects/box/team2/10.png";
import src11 from "../../../static/images/projects/box/team2/11.png";
import src12 from "../../../static/images/projects/box/team2/12.png";
import src13 from "../../../static/images/projects/box/team2/13.png";
import src14 from "../../../static/images/projects/box/team2/14.png";
import Desc from "../../../components/desc";

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
        <Image src={src1} />
      </Zoom>

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
      <Zoom margin="0">
        <Image src={src13} />
      </Zoom>
      <Zoom margin="0">
        <Image src={src14} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
