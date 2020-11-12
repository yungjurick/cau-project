import React from "react";
import styled from "styled-components";
import Desc from "../../../components/desc";
import ProjectLayout from "../../../components/projectLayout";
import Zoom from "../../../components/zoom";

import Video from "../../../components/video";

const CDN =
  "https://rawcdn.githack.com/khw1031/cdn/d4689d7ccffc21262863f337f70c6b687b4d6ecf/box/team4";

export default () => {
  return (
    <ProjectLayout title="Healing Power" names="장열 | 육자 | 부림림">
      <Desc fw={400}>
        The number of sexual assault cases that occur frequently in many parts
        of the world continues to rise. for the reason of this, for each country
        Crimes continue to increase because the way criminals are punished is
        different and the punishment for criminals who commit sex crimes is
        weak. Victims of sex crimes have no gender and there are male victims.
        It has created a pleasant space for emotional relaxation to have a
        positive impact on victims of such sex crimes.
      </Desc>

      <Video
        style={{ marginTop: "4rem" }}
        src="https://www.youtube.com/embed/kssIhI3W02M"
      />

      <Zoom margin="4rem 0">
        <Image src={`${CDN}/1.jpg`} />
      </Zoom>
    </ProjectLayout>
  );
};

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
`;
