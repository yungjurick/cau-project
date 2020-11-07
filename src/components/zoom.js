import React, { useRef } from "react";
import styled from "styled-components";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import { useEffect } from "react";

export default function Zoom({ children, margin = "4rem 0" }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageWrapper = imageRef.current;
    new Viewer(imageWrapper.children[0], {
      inline: false,
      navbar: 0,
      toolbar: {
        zoomIn: 1,
        zoomOut: 1,
        oneToOne: 1,
        reset: 1,
        prev: 0,
        play: {
          show: 0,
          size: "large",
        },
        title: 0,
        next: 0,
        rotateLeft: 0,
        rotateRight: 0,
        flipHorizontal: 0,
        flipVertical: 0,
      },
    });
  }, []);

  return (
    <Fit margin={margin} ref={imageRef}>
      {children}
    </Fit>
  );
}

const Fit = styled.div`
  font-size: 0;
  margin: ${props => props.margin};
  /* cursor: zoom-in; */
`;
