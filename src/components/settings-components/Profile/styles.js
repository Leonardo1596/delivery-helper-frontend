import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin-bottom: 30px;
    padding: 0 60px;

    @media (max-width: 480px) {
        padding: 0 40px;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid lightgray;
`;

export const Header = styled.h3`
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
    font-size: 17px;
`;

export const Form = styled.div`
    width: 400px;
   display: flex;
   align-items: start;
   justify-content: center;
   flex-direction: column;
   margin-top: 60px;
   padding: 0 20px;

   @media (max-width: 590px) {
        width: 320px;
    }

    @media (max-width: 590px) {
        width: 250px;
        padding: 0 5px;
    }

    @media (max-width: 400px) {
        width: 220px;
        padding: 0 5px;
    }
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
    height: 35px;
    border-radius: 25px;
    padding: 10px 20px;
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