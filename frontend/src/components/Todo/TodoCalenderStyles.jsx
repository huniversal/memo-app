import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CalendarHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .util-button button {
    margin: 0 5px;
  }
`;

export const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  .row {
    display: flex;
    justify-content: space-between;
  }
  .box {
    flex: 1;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
  }
  .selected {
    color : blue;
    font-weight : bold;
  }
  .grayed {
    color: gray;
  }
`;
