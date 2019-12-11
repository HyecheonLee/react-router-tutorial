import React from "react";
import qs from "qs";

export default function About({ location }) {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const detail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트...</p>
      {detail && <p>detail값이 true 입니다.!</p>}
    </div>
  );
}
