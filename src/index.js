import React, { useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import Dji from "./dji";
import Air2s from "./dji/air2s";
import Mini2 from "./dji/mini2";
import Air2 from "./dji/air2";
import Mini from "./dji/mini";
import MavicProZoom from "./dji/Mavic2Pro&Mavic2Zoom";
import MavicAir from "./dji/mavicAir";
import Platinum from "./dji/platinum";
import Pro from "./dji/pro";

const MainContent = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
ReactDOM.render(
  <React.StrictMode>
    <MainContent>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path={"/"} exact component={Dji} />
          <Route
            path={"/air-2s"}
            exact
            component={() => {
              return <Air2s />;
            }}
          />
          <Route
            path={"/mini-2"}
            exact
            component={() => {
              return <Mini2 />;
            }}
          />
          <Route
            path={"/air-2"}
            exact
            component={() => {
              return <Air2 />;
            }}
          />
          <Route
            path={"/mini"}
            exact
            component={() => {
              return <Mini />;
            }}
          />
          <Route
            path={"/mavic-2"}
            exact
            component={() => {
              return <MavicProZoom />;
            }}
          />
          <Route
            path={"/mavic-air"}
            exact
            component={() => {
              return <MavicAir />;
            }}
          />
          <Route
            path={"/mavic-pro-platinum"}
            exact
            component={() => {
              return <Platinum />;
            }}
          />
          <Route
            path={"/mavic-pro"}
            exact
            component={() => {
              return <Pro />;
            }}
          />
        </Switch>
      </Router>
    </MainContent>
  </React.StrictMode>,
  document.getElementById("root")
);

{/*<Route*/}
{/*  path={"/:model"}*/}
{/*  exact*/}
{/*  component={(params) => {*/}
{/*    console.log(params);*/}
{/*    return <div>{params.match.params.model}</div>;*/}
{/*  }}*/}
{/*/>*/}
