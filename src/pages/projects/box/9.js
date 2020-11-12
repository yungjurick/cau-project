import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team9";

export default () => {
  return (
    <ProjectLayout title="The Care" names="구가영 | 강유정">
      <Desc fw={400}>
        반려동물 5000만 시대, 수많은 반려동물 상품과 질 좋은 서비스가 넘쳐나는
        요즘 시대에 새로운 서비스 공간을 제안한다. 반려견 사업이 확장되며 고객은
        더 좋은 서비스에 더 많은 투자를 할 준비가 되어있다. 그런 니즈를 반영해
        동물복지 개선은 물론, 해가 지나 힘이 없어진 노령견들에게 안전하고 쾌적한
        휴식공간을 구상해 보았다. 반려견의 생애를 보면 초기 어린 강아지 시절에는
        걱정하지 않아도 되었을 건강에 관한 걱정들이 늘어나는 것을 알 수 있다.
        더군다나 병세가 악화되면서 일반 동물병원에서 더 이상 손을 쓸 수 없다는
        말을 듣게 될 수도 있다. 그런 상황에서, 노령견과 반려인들에게 딱 맞는
        공간은 바로 애니멀 호스피스 케어 센터이다. The CARE는 고통만을 더하는
        무의미한 연명치료와 힘든 시간들 대신 고통완화에 초점을 맞추어 자연스럽고
        편안하게 생을 마감할 수 있도록 반려인과 반려견 모두에게 좋은 휴식처를
        제공한다. The CARE에서의 시간들은 반려견과 반려인의 얼마 남지 않은
        소중한 시간을 좋은 추억으로 그들의 삶에 스며들게 해, 반려견이 함께할
        때에도, 그들이 떠나간 후에도 그 추억을 양분 삼아 더욱 풍요롭고 성장하는
        삶을 살아가게 한다. 천천히, 하지만 빠르게 흘러가는 시간들처럼, 반려견과
        반려인들이 마지막 시간을 천천히 흘려 보내며 추억을 되새기고 편안한
        시간을 보내는 것, 그것이 The CARE의 존재 이유이다.
      </Desc>

      <Zoom margin="4rem 0 0 0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>

      <Zoom margin="0">
        <Image src={`${CDN}/2.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/3.jpg`} />
      </Zoom>
      <Zoom margin="0">
        <Image src={`${CDN}/4.jpg`} />
      </Zoom>
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
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
