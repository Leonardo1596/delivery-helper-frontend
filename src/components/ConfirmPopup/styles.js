import styled from "styled-components";

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-family: 'Nunito Sans';
`;

export const Box = styled.div`
    padding: 40px 30px;
    width: 500px;
    border-radius: 25px;
    background-color: #fff;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.h2`
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
    font-size: 20px;
`;

export const CloseIcon = styled.button`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        color: #F44336;;
    }
`;

export const MessageContainer = styled.div`
    display: flex;
   align-items: start;
   justify-content: center;
   flex-direction: column;
   margin-top: 40px;
   padding: 0 20px;
`;

export const Message = styled.p`
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    margin-top: 40px;
`;

export const Button = styled.button`
    height: 35px;
    border-radius: 25px;
    padding: 10px 20px;
    border: none;
    outline: none;
    font-size: 13px;
    color: #fff;
    margin-left: 10px;
    cursor: pointer;
`;