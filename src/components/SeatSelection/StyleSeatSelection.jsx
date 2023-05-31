import styled from "@emotion/styled";

export const SeatsSelection = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #eae6e6;
  padding: 100px;
`;

export const BoxSeats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #eae6e6;

    border-radius: 20px;

    h2 {
      font-size: 25px;
      font-weight: 500;
    }

    h3 {
      font-size: 20px;
    }

    h5 {
      font-size: 18px;
    }
  }
`;

export const ColorSeat = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eae6e6;

  h6 {
    font-size: 20px;
    font-weight: 500;
  }
`;
export const Letter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  background-color: #eae6e6;
  width: 97%;

  div {
    display: flex;
    gap: 9px;
  }

  span {
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    color: black;
    font-size: 20px;
    font-weight: 400;

    &:hover {
      color: white;
      background-color: #9b2577;
    }
  }
`;

export const Exit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
