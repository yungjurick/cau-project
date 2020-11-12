import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import Gif from "../../../components/gif";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import Video from "../../../components/video";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team1";

export default () => {
  return (
    <ProjectLayout title="Look for" names="이효정">
      <Desc fw={400}>
        어반디케이X왕좌의 게임 에디션 플래그십 스토어 신사 가로수길점.
      </Desc>

      <Zoom margin="4rem 0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>

      <Desc fw={400}>
        어반디케이 신사 가로수길 플래그십 스토어 ‘LOOK FOR’은 어반디케이와
        왕좌의 게임 콜라보 제품을 홍보하는 체험형 공간 입니다. 눈으로 보고 귀로
        들으며 손으로 만져보고 향을 맡으며 오감을 이용해 체험하면서 많은
        사람들이 찾지 못한 자신만의 개성 즉 열쇠를 찾아줍니다. ‘LOOK FOR’에서
        본인만의 ‘열쇠’를 찾아 보세요.
      </Desc>

      <Video
        style={{ marginTop: "4rem" }}
        src="https://www.youtube.com/embed/4Sxu8EpeIyg"
      />

      <Zoom margin="4rem 0">
        <Image src={`${CDN}/4.jpg`} />
      </Zoom>

      <Gif src={`${CDN}/5.gif`} />

      <Zoom margin="4rem 0">
        <Image src={`${CDN}/6.jpg`} />
      </Zoom>

      <Desc fw={400} style={{ fontSize: "12px" }}>
        조형물 출처
        <br />
        Design Of The Week: Memorial Bust Of A Woman
        <br />
        Kerry Stevenson
        <br />
        https://www.fabbaloo.com/blog/2013/5/20/design-of-the-week-memorial-bust-of-a-woman.html#.UgxUrmR1g7Q
      </Desc>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
