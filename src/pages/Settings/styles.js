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

export const MenuHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
`;

export const MenuHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 25px;
    box-shadow: 
    0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 200px;
    border-radius: 25px;
    padding: 10px 0;
    border: none;
    outline: none;
    /* background-color: #3D8FE7; */
    background-color: transparent;
    color: #333;
    font-size: 13px;
    cursor: pointer;

    &.selected {
    background-color: #3D8FE7;
    color: white;
    }
`;