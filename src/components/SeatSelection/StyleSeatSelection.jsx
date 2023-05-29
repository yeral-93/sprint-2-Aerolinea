import styled from "@emotion/styled";

export const SeatsSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #eae6e6;
  padding: 100px;

  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    width: 50%;
    padding: 20px;
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
  gap: 10px;
  background-color: white;
  width: 50%;
  padding: 20px;
  border-radius: 20px;

  h6{
    font-size: 20px;
    font-weight: 500;
  }

  div{
    display: flex;
    gap: 10px;

    span{
        font-size: 19px;
        font-weight: 400;
    }
  }
`;
