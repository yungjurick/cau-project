import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import WrapForTeam from "../../../components/wrapForTeam";
import Zoom from "../../../components/zoom";

export default () => {
  return (
    <ProjectLayout title="RE-ving" names="정민지 | 권희영">
      <Desc fw={400}>
        RE-ving은 온라인 중고 시장과 차별화된 마케팅 전략으로 꺼져가는 오프라인
        중고 시장과 중고품 소비문화를 활성화시키기 위해 만들어진 공간이다.
        일반적인 중고마켓처럼 판매 공간에 그 목적을 두지 않고,
        'playground'라는 컨셉으로 판매와 더불어 중고품을 중심으로 한 다양한
        문화적 콘텐츠를 경험할 수 있는 공간으로 계획하였다. 친환경 활동을
        경험하고 체험할 수 있는 다양한 공간과 중고품 판매 공간을 연계하였고
        소비자들에게 마치 놀이터에 온 듯한 즐거운 경험을 제공하고 중고품
        소비문화에 대한 새로운 라이프스타일과 트렌드를 자연스럽게 소개하고
        창출하는 공간으로서의 역할을 다 할 수 있도록 디자인하였다.
      </Desc>
      <div style={{ marginTop: "4rem" }}></div>
      <WrapForTeam top="8.5%" src="https://www.youtube.com/embed/kyrUe9C9n1Q">
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F1.png?alt=media&token=2b418ca9-bbbb-470a-8101-dc704f1f19aa" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F2.png?alt=media&token=9543061f-7d00-4321-ad35-7b2f3e5f7651" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F3.png?alt=media&token=1b674cf9-0a1d-4866-904d-2eacd7f6e330" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F4.png?alt=media&token=2ff3cbb7-edc9-40e3-9ef6-9616246fec69" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F5.png?alt=media&token=838d62d9-3ecf-48d7-aa3a-71c480131fbd" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F6.png?alt=media&token=b68339fd-8a9d-4c07-82ca-3cabec3969d2" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F7.png?alt=media&token=68679bdf-206f-4b8c-84e6-444515605b18" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F8.png?alt=media&token=874b7281-3f85-41d8-8a18-988d38926711" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F9.png?alt=media&token=eb2d8279-6cd3-43ea-aa45-b156ab060a72" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F10.png?alt=media&token=e292afdf-940d-43d5-8bcd-e3b11320cff5" />
        </Zoom>
        <Zoom margin="0">
          <Image src="https://firebasestorage.googleapis.com/v0/b/ca01-3120a.appspot.com/o/handle%2Fteam2%2F11.png?alt=media&token=ad5842aa-c5b0-4ddc-82eb-931029dc6ba6" />
        </Zoom>
      </WrapForTeam>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
