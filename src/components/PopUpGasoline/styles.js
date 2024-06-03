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

export const Form = styled.div`
   display: flex;
   align-items: start;
   justify-content: center;
   flex-direction: column;
   margin-top: 60px;
   padding: 0 20px;
`;

export const FormField = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Label = styled.label`
    color: #888;
    margin-bottom: 5px;
    font-size: 15px;
`;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border: none;
    color: rgba(0, 0, 0, 0.87);
    border-bottom: 1px solid #ccc;
    outline: none;
    text-indent: 10px;
    
    &:focus {
        border-bottom: 1px solid black;
    }
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
    width: 50%;
    height: 35px;
    border-radius: 25px;
    padding: 10px 20px;
    border: none;
    outline: none;
    background-color: #3D8FE7;
    color: #fff;
    font-size: 13px;
    cursor: pointer;

    img {
        width: 23px;
        height: 23px;
    }

    &:hover {
        background-color: #66A6F7;
    }
`;