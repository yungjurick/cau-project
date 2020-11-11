import React from "react";
import App from "./src/components/app";

const CheckTime = () => {
  let fnCode = `(function() {
    // 개발 중 시연을 위해 isDevMode = true로 설정
    // 배포 시 반드시 false로 변경
    // open 예정일 이후에는 해당 코드 삭제해도 무관함
    const isDevMode = false;
    if (isDevMode) return;
    const now = Date.now();
    const openTime = new Date(2020,10,11,00,00,00).getTime();
    const isPreOpen = now < openTime;
    // 오픈 예정일 이전에 사이트 접속할 경우 /pre-open으로 라우팅
    if (!window.location.pathname.match(/(pre-open)/gi) && isPreOpen) {
      window.location.href = "/pre-open";
    } else if (window.location.pathname.match(/(pre-open)/gi) && !isPreOpen) {
      window.location.href = "/";
    }
  })()`;

  return <script dangerouslySetInnerHTML={{ __html: fnCode }}></script>;
};

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <link
      key={`ssr_head_link`}
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700&display=swap"
      rel="stylesheet"
    />,
  ]);
  setPreBodyComponents(<CheckTime key={`ssr_check_date`} />);
};

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>;
};
