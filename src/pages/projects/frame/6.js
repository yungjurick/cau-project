import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";
import Video from "../../../components/video";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/frame/team6";

export default () => {
  return (
    <ProjectLayout title="Dèsart" names="김미나 | 김혜진 | 윤수지">
      <Desc fw={400}>
        아파트 공화국이라고 불리는 대한민국 최초의 아파트는 1930년대 지어진 90년
        역사의 충정아파트이다. 6.25전쟁도 겪어낸 살아있는 근대 건축물이지만
        오래된 역사에 비해 부실하고 낡은 내외관과 주민 간 갈등으로 인해
        거주민들은 점차 충정아파트를 떠나가며 아파트로서 의미를 잃어가고 있다.
        대한민국 최초의 아파트이지만 잊혀져가는 그늘진 충정아파트에 새로운
        발걸음을 유입하여 기존의 가치를 되살려주고자한다.
      </Desc>

      <Zoom margin="4rem 0 0 0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>

      <Video
        style={{ margin: "4rem 0" }}
        src="https://www.youtube.com/embed/b31qY6h7eoQ"
      />

      <Zoom margin="0">
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
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
