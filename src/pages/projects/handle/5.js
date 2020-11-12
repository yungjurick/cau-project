import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import WrapForTeam from "../../../components/wrapForTeam";
import Zoom from "../../../components/zoom";

export default () => {
  return (
    <ProjectLayout title="EVERYONEDAY" names="박연주">
      <Desc fw={700}>
        모든 원데이클래스가 있는 곳, 모든 이의 하루를 위한 곳, '에브리원데이'
      </Desc>

      <Desc fw={400}>
        현대인들이 겪고 있는 번아웃 증후군을 해소하기 위해 짧은 시간에 다양한
        체험을 할 수 있는 원데이클래스가 각광을 받고 있다. 다양한 원데이클래스를
        한 곳에 모아 놓은 에브리원데이는 수강생을 위한 수업공간과 운영자의 공방
        그리고 교류의 중심이 될 살롱공간의 유기적 공간구성을 디자인 중심에 두고
        자기개발이나 단순한 힐링을 넘어서 사람들이 모여 소통하며 정보를 교환할
        수 있는 모두를 위한 문화공간을 제시하고자 한다.
      </Desc>

      <WrapForTeam
        margin="0"
        top="0"
        src="https://www.youtube.com/embed/Bx0EJwTMXtk"
      >
        <Zoom margin="4rem 0 0 0">
          <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team5/1.jpg" />
        </Zoom>

        <Zoom margin="0">
          <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team5/2.jpg" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team5/3.jpg" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team5/4.jpg" />
        </Zoom>
      </WrapForTeam>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
