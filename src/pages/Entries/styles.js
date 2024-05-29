import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
    
    @media (max-width: 1200px) {
        padding: 0 60px;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        padding: 0 15px;
    }
    `;

export const Container = styled.div`
    width: 1157px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
    max-width: 100vw;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 40px;
    margin-bottom: 30px;
`;

export const Header = styled.h2`
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
    font-size: 20px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AddIcon = styled.button`
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    color: #3D8FE7;
    background-color: transparent;
    cursor: pointer;
`;

export const Box = styled.div`
    background-color: #fff;
    /* margin-top: 40px; */
    padding: 30px 0;
    width: 100%;
    border-radius: 25px;
    box-shadow: 
    0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12);

`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    border-radius: 25px;
    padding: 10px 20px;
    margin-right: 20px;
    border: none;
    outline: none;
    background-color: #3D8FE7;
    color: #fff;
    font-size: 13px;
    cursor: pointer;

    &:hover {
        background-color: #66A6F7;
    }
`;