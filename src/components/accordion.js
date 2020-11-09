import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styled from "styled-components";
import { projectInfo } from "../config/projects";
import { go, mapL, join } from "fxjs";
import { Link } from "gatsby";
import { COLORS } from "../styles/scheme";

const capitalize = str =>
  go(
    str.split(" "),
    mapL(([c, ..._]) => [c.toUpperCase(), ..._].join("")),
    join(" ")
  );

export default function AccordionMenu({ keys = [] }) {
  return (
    <Wrapper>
      <MenuItem
        to="/"
        activeClassName="active"
        style={{ marginBottom: "1rem" }}
      >
        Home
      </MenuItem>
      <Accordion allowZeroExpanded>
        {keys.map(key => (
          <Item key={key} style={{ marginBottom: "1rem" }}>
            <AccordionItemHeading>
              <Button>{capitalize(key)}</Button>
            </AccordionItemHeading>
            <AccordionItemPanel
              style={{ paddingTop: "1.25rem", paddingBottom: "0.65rem" }}
            >
              {projectInfo[key].map(({ people, link }) => (
                <MenuItem
                  className="gothic"
                  activeClassName="active"
                  key={link}
                  to={link}
                  style={{
                    fontSize: "0.85rem",
                    marginLeft: "4rem",
                    marginBottom: "1rem",
                  }}
                >
                  {people.join(" | ")}
                </MenuItem>
              ))}
            </AccordionItemPanel>
          </Item>
        ))}
      </Accordion>
      <MenuItem
        to="/guest/"
        activeClassName="active"
        style={{ marginBottom: "1rem" }}
      >
        Guest
      </MenuItem>
      <MenuItem to="/about/" activeClassName="active">
        About
      </MenuItem>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const MenuItem = styled(Link)`
  display: block;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 700;
  &:hover {
    color: ${COLORS.primaryDimmed};
  }
  &.active {
    text-decoration-line: underline;
  }
`;

const Item = styled(AccordionItem)`
  font-size: 1.15rem;
  font-weight: 700;
  &:hover {
    color: ${COLORS.primaryDimmed};
  }
`;

const Button = styled(AccordionItemButton)`
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
