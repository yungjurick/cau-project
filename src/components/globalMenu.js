import React, { useState } from "react";
import styled from "styled-components";
import { mobileLAbove, tabletAbove } from "../styles/mediaQuery";
import Img from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import searchIconSrc from "../static/images/search-solid.svg";

import AccordionMenu from "./accordion";
import { COLORS } from "../styles/scheme";
import { projectInfo } from "../config/projects";
import { map, flat, values, go, filter } from "fxjs";
import timesSrc from "../static/images/times.png";

export default function GlobalMenu() {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const [onSearch, setOnSearch] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const activateMenu = () => setIsActive(true);
  const deactivateMenu = () => {
    setOnSearch(false);
    setSearchQuery();
    setIsActive(false);
  };

  const data = useStaticQuery(graphql`
    query {
      menubar: file(relativePath: { eq: "bars.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim().length < 1) {
      setSearchTitle();
      return setOnSearch(false);
    }
    go(
      projectInfo,
      values,
      flat,
      map(_ => ({ ..._, queryTarget: _.people.join(" ") })),
      filter(_ => _.queryTarget.match(searchQuery)),
      setSearchResult
    );
    setSearchTitle(searchQuery);
    setOnSearch(true);
  };

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  if (!isActive)
    return (
      <Button onClick={activateMenu}>
        <Img
          style={{ height: "100%" }}
          imgStyle={{ objectFit: "contain" }}
          fluid={data.menubar.childImageSharp.fluid}
        />
      </Button>
    );
  return (
    <>
      {onSearch && (
        <SearchResult>
          <Result>
            <Query className="gothic">"{searchTitle}"에 대한 검색 결과</Query>
            {!searchResult.length ? (
              <ResultBox>검색 결과가 없습니다.</ResultBox>
            ) : (
              <ResultBox>
                {searchResult.map(d => (
                  <SearchLink key={d.link} to={d.link}>
                    <Dash />
                    <span className="gothic" style={{ marginRight: "5px" }}>
                      {d.project} {">"}&nbsp;
                      {d.title}&nbsp;{">"}
                    </span>
                    <span className="gothic">{d.people.join(" ")}</span>
                  </SearchLink>
                ))}
              </ResultBox>
            )}
          </Result>
        </SearchResult>
      )}
      <Dim onClick={deactivateMenu} />
      <Menu className="g_menu">
        <Sticky>
          <Top>
            <CloseButton icon={timesSrc} onClick={deactivateMenu} />
          </Top>
          <MenuInner>
            <AccordionMenu keys={["handle", "box", "frame"]} />
            <Form onSubmit={handleSubmit}>
              <Input
                className="gothic"
                type="text"
                placeholder="학생 이름을 검색하세요."
                value={searchQuery}
                onChange={handleSearch}
              />
              <SearchButton />
            </Form>
            {onSearch && (
              <SearchResultMobile>
                <Query className="gothic" style={{ fontSize: "1rem" }}>
                  "{searchTitle}"에 대한 검색 결과
                </Query>
                {!searchResult.length ? (
                  <ResultBox style={{ padding: "1rem 0", fontSize: "0.85rem" }}>
                    검색 결과가 없습니다.
                  </ResultBox>
                ) : (
                  <ResultBox style={{ padding: "1rem 0" }}>
                    {searchResult.map(d => (
                      <SearchLink
                        style={{ fontSize: "0.85rem", marginBottom: "0.45rem" }}
                        key={d.link}
                        to={d.link}
                      >
                        <Dash style={{ width: "10px" }} />
                        <span className="gothic" style={{ marginRight: "5px" }}>
                          {d.project} {">"}&nbsp;
                          {d.title}&nbsp;{">"}
                        </span>
                        <span className="gothic">{d.people.join(" ")}</span>
                      </SearchLink>
                    ))}
                  </ResultBox>
                )}
              </SearchResultMobile>
            )}
          </MenuInner>
        </Sticky>
      </Menu>
    </>
  );
}

const Form = styled.form`
  margin: 1rem 0;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${COLORS.primary};
`;

const Input = styled.input`
  border: none;
  margin-right: auto;
  background: transparent;
  flex-basis: 100%;
  :focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  background-image: url(${searchIconSrc});
  background-repeat: no-repeat;
  background-size: 15px 15px;
  padding: 1rem;
  background-position: 50%;
  width: 15px;
  height: 15px;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  position: absolute;
  padding: 0;
  margin: 0;
  border: none;
  width: 1.4rem;
  height: 1.4rem;
  left: 1rem;
  z-index: 88;
  cursor: pointer;
  background: none;
`;

const SearchResult = styled.div`
  z-index: 87;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #fff;
  display: none;
  overflow-y: scroll;
  ${tabletAbove`
    display: block;
    left: 350px;
    padding: 2rem;
  `};
`;

const SearchResultMobile = styled.div`
  ${tabletAbove`
    display: none;
  `}
`;

const CloseButton = styled.button`
  margin-right: -0.8rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: none;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  background-color: transparent;
  background-size: 60%;
  background-repeat: no-repeat;
  background-image: url(${props => props.icon});
`;

const Menu = styled.nav`
  z-index: 88;
  position: fixed;
  overflow-y: scroll;
  display: flex;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: #fff;

  padding: 1.2rem;
  ${mobileLAbove`
    width: 350px;
  `}
`;

const Dim = styled.div`
  z-index: 80;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const MenuInner = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  padding: 2rem 1rem;
`;

const Top = styled.div`
  text-align: start;
`;

const Sticky = styled.div`
  width: 100%;
`;

const Result = styled.div``;

const Query = styled.h3`
  font-weight: 700;
  font-size: 1.4rem;
`;

const ResultBox = styled.div`
  padding: 4rem 0;
  font-size: 1.2rem;
`;

const Dash = styled.span`
  display: inline-block;
  width: 15px;
  height: 1px;
  margin-right: 1rem;
  background: ${COLORS.primary};
`;

const SearchLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 0.85rem;
  &:hover {
    text-decoration-line: underline;
  }
`;
