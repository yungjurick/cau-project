import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

export default () => {
  return (
    <ProjectLayout title="웃는남자 오픈 런 씨어터" names="박지현 | 황예린">
      <Desc fw={400}>
        웃는남자 오픈 런 씨어터는 한국 최초의 뮤지컬 전용 상설 공연장이다. 기존
        공연장의 틀을 벗어나 시대적 흐름을 반영한 디지털 공연장으로 쉘 타입의
        공연장 전체가 무대의 배경이 된다. 관객은 공연을 다양한 위치에서 감상할
        수 있으며 360°의 공간 속에서 배우와 관객이 무대와 하나가 되는 입체적
        공연장으로 디자인한 프로젝트이다.
      </Desc>
      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/01.gif" />
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/02.png" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/03.png" />
      </Zoom>
      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/04.gif" />
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/05.png" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/06.png" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/07.png" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/08.png" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/09.png" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/10.png" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/11.png" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/12.png" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/13.png" />
      </Zoom>
      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/14.gif" />
      <div style={{ marginTop: "50rem" }} />
      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/15.gif" />
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team3/16.png" />
      </Zoom>
      <Desc style={{ fontSize: "12px", marginTop: "2rem", textAlign: "end" }}>
        이미지출처_EMK뮤지컬컴퍼니
      </Desc>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
