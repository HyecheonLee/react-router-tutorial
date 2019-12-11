import React from "react";
import { NavLink, Route } from "react-router-dom";
import RouterHookSample from "./RouterHookSample";
const profileData = {
  hclee: {
    name: "이혜천",
    description: "백수"
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 가족에 나오는 아빠 역할 캐릭터"
  }
};

export default function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink to="/profiles/hclee">hclee</NavLink>
        </li>
        <li>
          <NavLink to="/profiles/homer">homer</NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <RouterHookSample />
    </div>
  );
}
