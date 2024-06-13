import styled from "styled-components";

export const WeekContainer = styled.div`
    width: 100vw;
    margin-bottom: 30px;
    font-family: 'Nunito Sans';
`;

export const WeekArea = styled.div`
    max-width: 1157px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 150px;
    margin-bottom: 10px;


    h2 {
        font-size: 24px;
    }

    @media screen and (max-width: 1024px) {
        h2 {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 0 100px;
        h2 {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 500px) {
        padding: 0 80px;

        h2 {
            font-size: 18px;
        }
    }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  color: #333333;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  @media (max-width: 580px) {
    font-size: 14px;
  }
`;

export const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 500px) {
        font-size: 13px;
    }
`;