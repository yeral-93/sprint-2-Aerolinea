import styled from "@emotion/styled";

export const SectionDiv = styled.div`
padding: 50px 140px 50px 140px;

 @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0px;
   
  }
  @media (max-width: 412px) {
    width: 100%;
    height: auto;
    padding: 0px;
   
  }
`

export const SectionCards = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
   
  }
  @media (max-width: 412px) {
    width: 100%;
    height: auto;
    padding: 20px 0px 30px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
  }
`;

