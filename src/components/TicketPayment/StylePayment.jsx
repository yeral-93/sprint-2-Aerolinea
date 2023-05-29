import styled from "@emotion/styled";

export const DivPayment = styled.div`
  background-color: #eae6e6;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h2 {
    font-size: 30px;
    font-weight: 500;
  }
`;

export const PersonData = styled.div`
  display: flex;
  gap: 50px;

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 20px 30px;
    border-radius: 20px;
    width: 250px;
    h2 {
      font-size: 25px;
      font-weight: 500;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;

      li {
        background-color: #f2efef;
        list-style: none;
        padding: 8px;
        border-radius: 10px;
        border: solid 1px #9b2577;

        &:hover{
            background-color: #9b2577;
        }
      }

      button {
        padding: 5px 0px 5px 20px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    padding: 20px 30px;
    border-radius: 20px;
    h3 {
      font-size: 22px;
      font-weight: 500;
    }
    h5 {
      font-size: 15px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-size: 14px;
    }

    input {
      padding: 18px;
      border-radius: 20px;
      border: solid 1px #9b2577;
      color: #9b2577;
      background-color: #f2efef;
    }

    button {
      padding: 10px;
      background-color: #9b2577;
      border-radius: 20px;

      &:hover {
        background-color: #b380a4;
      }
    }
  }
`;

export const InformationCash = styled.div`
  display: flex;
  gap: 50px;
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 20px 30px;
    border-radius: 20px;
    width: 250px;

    h4 {
      font-size: 25px;
      font-weight: 500;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
     
      li {
        background-color: #f2efef;
        list-style: none;
        padding: 8px;
        border-radius: 10px;
        border: solid 1px #9b2577;

        &:hover{
            background-color: #9b2577;
        }
      }

      button {
        display: flex;
        align-items: center;
        text-align: left;
        font-weight: 400;
        height: 50px;
        padding: 0px 0px 0px 10px;

        img {
          width: 40px;
          margin: 0px 10px 0px 0px;
        }  
    }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 20px 30px;
    border-radius: 20px;
    width: 37%;

    h4 {
      font-size: 25px;
      font-weight: 500;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      span {
        display: flex;
        flex-direction: column;
      }

      input {
        padding: 18px;
        border-radius: 20px;
        border: solid 1px #9b2577;
        color: #9b2577;
        background-color: #f2efef;
      }

      label {
        font-size: 14px;
      }

      button {
        padding: 10px;
        background-color: #9b2577;
        border-radius: 20px;

        &:hover {
          background-color: #b380a4;
        }
      }
    }
  }
`;
