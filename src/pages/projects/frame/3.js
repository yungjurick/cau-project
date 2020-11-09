import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Video from "../../../components/video";
import Zoom from "../../../components/zoom";
import src1 from "../../../static/images/projects/frame/team3/1.jpg";
import src2 from "../../../static/images/projects/frame/team3/2.jpg";
import src3 from "../../../static/images/projects/frame/team3/3.jpg";
import src4 from "../../../static/images/projects/frame/team3/4.jpg";

export default () => {
  return (
    <ProjectLayout title="52Hz" names="곽가 | 장령희">
      <Desc fw={400}>
        해양오염이 점점 심각해지는 지금은 사람들이 바다를 보호를 안 하여
        바다속에서 살고 있는 해양생물들이 피해를 많이 받고 있다. 가장 큰
        해양생물인 고래처럼 바다속에서 음파 헤르츠로 교류하지만, Alice라는
        고래의 목소리가 다른 고래의 음파신호와 비해 높아 52헤르츠이기 때문에,
        아무도 그의 신호를 받을 수 없고 그의 존재조차도 모른다. 하지만 불쌍한
        해양생물들이 외로운 고래처럼 사람들한테 외치는 구급 신호를 아무도 안
        들린다. 그러니 고래의 시선으로 해양생태가 어떻게 파괴되어 있는지에 대해
        대중들에게 중시해주시길 바라는 마음을 전달하고자 한다.
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

      <Video
        style={{ margin: "4rem 0" }}
        src="https://www.youtube.com/embed/kWLZxj40n-0"
      />
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
