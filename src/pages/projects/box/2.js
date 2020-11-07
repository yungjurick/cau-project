import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/box/team2/1.png";
import src2 from "../../../static/images/projects/box/team2/2.png";
import src3 from "../../../static/images/projects/box/team2/3.png";
import src4 from "../../../static/images/projects/box/team2/4.png";
import src5 from "../../../static/images/projects/box/team2/5.png";
import src6 from "../../../static/images/projects/box/team2/6.png";

export default () => {
  return (
    <ProjectLayout
      title="원(源)의 교회: 근본의 의미를 찾는 공간"
      names="이한선"
    >
      <Desc fw={400}>
        교회 건축은 ‘신’이라는 하나의 초월적 존재에 대한 건축적, 물리적
        표현으로써 기원전부터 현대에 이르기까지 다양한 형태를 취하고 있습니다.
      </Desc>

      <Desc fw={400}>
        19세기까지는 회랑-성소-제단으로 이루어진 3단계 구성과 제단을 중심으로
        위계적이고 중앙 집중적인 형태를 보입니다.
      </Desc>

      <Desc fw={400}>
        이후 20세기 후반부터 제 2차 바티칸 공의회와 평신도운동으로 인한 교회의
        인식 변화로 교회가 신비함을 벗고 이웃과 주변 환경과의 조화를 추구하는
        새로운 형태의 교회 건축 공간이 지속적으로 요구되고 있습니다.
      </Desc>

      <Desc fw={400}>
        하지만 지금 우리가 흔히 접하는 교회의 모습은 들어가고 나오기가 편안한
        외부공간 없이 내부공간 중심으로 구성되어 비신자가 문을 열고 들어가기에는
        너무 큰 용기가 필요합니다. 게다가 대부분의 경우 대예배당은 주중에는 문이
        잠겨있습니다. 이렇듯 형제 사랑을 중시하는 교회가 건축적으로는
        아이러니하게 더 폐쇄적으로 존재합니다.
      </Desc>

      <Desc fw={400}>
        교회의 진정한 의미를 이루기 위해선, 이웃과 주변환경이 어우러져 다양한
        사람들을 포용할 수 있는 보다 ‘열려있는’ 교회 건축 공간 디자인이
        필요합니다. 저는 교회와 주변 관계를 연결하는 리좀 개념의 새로운 교회
        건축 공간을 제안합니다.
      </Desc>

      <Desc fw={400}>
        제가 지정한 대지인 폐채석장의 장소성과 시간성을 살려 주변환경과 더불어
        비신자도 교회에 편안하게 스며들 수 있는 공간을 만들었습니다. 그리고
        이러한 공간을 감싸는 회랑은 다양한 공공의 프로그램으로 자유롭게
        배치했습니다.
      </Desc>

      <Desc fw={400}>
        폐채석장의 구조물을 감싸는 듯한 원형의 형태는 회랑과 예배당에서 구조물을
        관람할 수 있는 동시에, 외부 환경을 실내로 유입합니다. 원형의 매스를 덮는
        산의 곡선을 본 딴 지붕과 구조물을 넘지 않는 높이로 상징성을 드러내는
        역할을 합니다. 세상에 우뚝 서서 존재하지 않고 낮고 넓게 아우르는 건물의
        모습과 그 사이를 자유롭게 거니는 사람들의 풍경이 교회 건축의 새로운
        상징성을 함축할 것입니다.
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
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
