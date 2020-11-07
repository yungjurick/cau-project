import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import WrapForTeam from "../../../components/wrapForTeam";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/frame/team3/1.jpg";

import SpecificWrap from "../../../components/specificWrap";

export default () => {
  return (
    <ProjectLayout title="52Hz" names="곽가 | 장령희">
      <Desc fw={400}>
        저희팀 작품은 52헤르츠라고 합니다. 미국에서 발견된 고래의 목소리가 다른
        고래와 다른 52헤르츠라서, 아무도 그 고래의 신호를 받을 수 없으며, 그의
        존재조차 모른다.
      </Desc>

      <Desc fw={400}>
        저희 작품은 이 외로운 고래의 여정을 바당으로 만들어집니다.
      </Desc>

      <Desc fw={400}>
        해양오염이 점점 심하지는 지금,사람들이 바다를 보호를 안하기 때문에
        바다안에서 살고 있는 해양생물들이 피해를 많이 받고 있습니다. 하지만
        불쌍한 해양생물들이 마치 외로운 고래처럼,사람들한테 외치는 구급 신호를
        아무도 안 들입니다.
      </Desc>

      <Desc fw={400}>
        그래서 고래의 여정을 3파트로 나눠서,사람들이 이 공간안에 구경하면서 각
        파트 장면안으로 몰입하고 스스로 환경보호를 해야되다는 것이 느낄 수
        있으면 좋겠습니다.
      </Desc>

      <div style={{ marginTop: "4rem" }} />

      <WrapForTeam
        style={{ padding: "15%" }}
        top="77%"
        src="https://www.youtube.com/embed/kWLZxj40n-0"
      >
        <SpecificWrap />

        <Zoom margin="4rem 0 0 0">
          <Image src={src1} />
        </Zoom>
      </WrapForTeam>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
