import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import Video from "../../../components/video";

export default () => {
  return (
    <ProjectLayout title="Swipe Cube " names="박예진 | 이나경">
      <Desc fw={400}>
        요즘 누구나 사용하는 ‘스트리밍’ 시스템이 각광받는 이유는 언제 어디서나
        원하는 컨텐츠를 즐길 수 있다는 점 때문이다. ‘공간도 음악, 영화
        컨텐츠처럼 원할 때에 어디서든 즐길 수 없을까?’ 라는 물음에서 이
        프로젝트는 시작되었다. 현시점에서 공간의 스트리밍은 물리적인 한계가 있는
        ‘대여’ 시스템에 지나지 않거나, 기술에 의존하는 체험에 의의를 두는
        ‘허구’인 경우뿐이다. 우리는 언젠가 공간이 스트리밍 되는 것에 대해
        가능성을 열어두고, 현재의 기술과 근미래의 기술들을 접목하여 그 시작을
        열어보려 한다.
      </Desc>
      <div style={{ marginTop: "4rem" }} />
      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/1.gif" />
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/2.jpg" />
      </Zoom>
      <Video
        style={{ margin: 0 }}
        src="https://www.youtube.com/embed/aoItkKUw1HU"
      />
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/4.jpg" />
      </Zoom>
      <Video
        style={{ margin: 0 }}
        src="https://www.youtube.com/embed/cGBvr1j3iFA"
      />
      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/6.gif" />
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/7.jpg" />
      </Zoom>
      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/8.gif" />
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/9.jpg" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/10_1.jpg" />
      </Zoom>
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/10_2.jpg" />
      </Zoom>
      <Gif src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/11.gif" />
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/12.jpg" />
      </Zoom>
      <Video
        style={{ margin: 0 }}
        src="https://www.youtube.com/embed/dHDyqOM4ITA"
      />
      <Zoom margin="0">
        <Image src="https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/handle/team4/13.jpg" />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
