import styled from "@emotion/styled";

export const SeatsSelection = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #eae6e6;
  padding: 100px;`

  export const BoxSeats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  section {
  display: flex;
  flex-direction: column;
     gap: 10px;
     background-color: white;
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
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  gap: 10px;

  h6{
    font-size: 20px;
    font-weight: 500;
  }

  div{
    display: flex;
    align-items: center;
    gap: 10px;

    span{
        font-size: 19px;
        font-weight: 400;
    }
  }
`;
export const Letter = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 9px;
background-color: white;
padding: 40px 0px 0px 0px;
border-radius: 20px 20px 0px 0px;

span{
    display: flex;
    align-items: center;
    background-color: white;
    padding: 12px;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    border: solid 1px #9b2577;
    color: #9b2577;
    font-size: 20px;

    &:hover{
        color:white;
        background-color:#9b2577;
    }
}
`