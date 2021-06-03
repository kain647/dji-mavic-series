import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MavicBox = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
`;
export const Detail = styled.div`
  display: flex;
  position: absolute;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px;
`;
export const Title = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 16px;
  img {
    width: 182px;
    height: 40px;
  }
`;
export const Subtitle = styled.div`
  display: flex;
  width: 472px;
  height: 72px;
  color: #303233;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 100px;
`;
export const PhotoMavic = styled.div`
  display: flex;
  box-sizing: border-box;
  img {
    box-sizing: border-box;
    width: 1200px;
    height: 480px;
    margin-bottom: 20px;
    cursor: pointer;
    :hover {
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    }
  }
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;
export const Buy = styled.div`
  display: flex;
  margin-right: 20px;
  a {
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    line-height: 16px;
    padding: 15px 32px;
    border: none;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #3c3e40;
    background-image: linear-gradient(-180deg, #3c3e40 0%, #303233 100%);
    :hover {
      background-image: linear-gradient(-180deg, #545759 0%, #303233 100%);
    }
  }
`;
export const More = styled.div`
  display: flex;
  a {
    display: flex;
    font-weight: 600;
    line-height: 46px;
    height: 46px;
    color: #303233;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    :hover {
      color: #616466;
    }
    svg {
      margin-left: 10px;
    }
  }
`;
export const PlatinumContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  //padding: 30px;
  background-color: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  :last-child {
    margin-right: 0;
  }
  :hover {
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  }
`;
export const PhotoPlatinum = styled.div`
  display: flex;
  box-sizing: border-box;
  img {
    box-sizing: border-box;
    width: 590px;
    height: 320px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
export const PlatinumMap = styled.div`
  display: flex;
  box-sizing: border-box;
`;
export const InfoPlatinum = styled.div`
  display: flex;
  width: 590px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
`;
export const TitlePlatinum = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const SubtitlePlatinum = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
