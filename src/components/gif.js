import React from "react";
import styled from "styled-components";
import src1 from "../static/images/handle/team3/1.gif";
import src3 from "../static/images/handle/team3/3.gif";
import src5 from "../static/images/handle/team3/5.gif";
import src6 from "../static/images/handle/team3/6.gif";
import team4src1 from "../static/images/handle/team4/1.gif";
import team4src6 from "../static/images/handle/team4/6.gif";
import team4src8 from "../static/images/handle/team4/8.gif";
// import team4src11 from "../static/images/handle/team4/11.gif";
import team6src2 from "../static/images/handle/team6/2.gif";
import team6src3 from "../static/images/handle/team6/3.gif";
import team6src4 from "../static/images/handle/team6/4.gif";
import team7src14 from "../static/images/handle/team7/14.gif";
import boxTeam1Src1 from "../static/images/box/team1/5.gif";
import boxTeam52 from "../static/images/box/team5/2.gif";
import boxTeam54 from "../static/images/box/team5/4.gif";
import boxTeam55 from "../static/images/box/team5/5.gif";
import boxTeam57 from "../static/images/box/team5/7.gif";
import boxTeam58 from "../static/images/box/team5/8.gif";
import boxTeam510 from "../static/images/box/team5/10.gif";
import boxTeam512 from "../static/images/box/team5/12.gif";
import boxTeam514 from "../static/images/box/team5/14.gif";
import boxTeam71 from "../static/images/box/team7/1.gif";
import frameTeam51 from "../static/images/frame/team5/m.gif";
import frameTeam52 from "../static/images/frame/team5/m2.gif";

const sources = {
  handleTeam3One: src1,
  handleTeam3Three: src3,
  handleTeam3Five: src5,
  handleTeam3Six: src6,
  handleTeam4One: team4src1,
  handleTeam4Six: team4src6,
  handleTeam4Eight: team4src8,
  // handleTeam4Eleven: team4src11,
  handleTeam6Three: team6src3,
  handleTeam6Four: team6src4,
  handleTeam6Two: team6src2,
  handleTeam7: team7src14,
  boxTeam1Src1,
  boxTeam52,
  boxTeam54,
  boxTeam55,
  boxTeam57,
  boxTeam58,
  boxTeam510,
  boxTeam512,
  boxTeam514,
  boxTeam71,
  frameTeam51,
  frameTeam52,
};

export default function Gif({ name, ...props }) {
  return (
    <Wrapper {...props}>
      <img src={sources[name]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  font-size: 0;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
