import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 20px 170px;
  background-color: ${({ bg = "white" }) => bg};
  ol,
  ul {
    list-style: none;
    vertical-align: baseline;
  }
  .group-list-title {
    font-size: 24px;
    color: #3b3e40;
    line-height: 32px;
    margin-bottom: 32px;
  }
  .detailed-parameter-list {
    display: flex;
    padding: 12px 16px;
    background: #f8f9fb;
    align-items: baseline;
    margin: 0;
    :nth-child(2n-1) {
      background: #fff;
      margin: 0;
    }
  }
  .detailed-parameter-key {
    //width: 255px;
  }
  .detailed-parameter-value {
    margin-left: 20px;
  }
`;
export const SpecsTitle = styled.div`
  display: flex;
  align-items: center;
	justify-content: space-between;
  border-bottom: 1px solid #f0f1f2;
`;
export const SpecsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Title = styled.h1`
  display: flex;
  font-size: 32px;
  margin-bottom: 30px;
  color: #3b3e40;
`;
export const ListTitle = styled.h3`
  display: flex;
  font-size: 24px;
  color: #3b3e40;
  line-height: 32px;
  margin-bottom: 32px;
`;
export const TitleSpec = styled.div`
	display: flex;
  font-size: 32px;
  line-height: 48px;
  font-weight: 700;
  align-items: center;
  color: #3b3e40;
  padding-bottom: 12px;
`;
