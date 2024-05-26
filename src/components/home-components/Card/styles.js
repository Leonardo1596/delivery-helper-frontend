import styled from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    box-shadow: 
        0px 2px 1px -1px rgba(0,0,0,0.2),
        0px 1px 1px 0px rgba(0,0,0,0.14),
        0px 1px 3px 0px rgba(0,0,0,0.12);
    font-family: 'Nunito Sans';
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Header = styled.p`
    color: rgba(0, 0, 0, 0.54);
    margin-bottom: 10px;

    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
`;

export const Value = styled.h5`
    color: rgba(0, 0, 0, 0.87);
    font-size: 24px;
    font-weight: 500;

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`;