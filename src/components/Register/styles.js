import styled from 'styled-components';

export const RegisterContainer = styled.div`
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 17px;
    position: relative;
    font-family: 'Nunito Sans';

    @media (max-width: 520px) {
        width: 430px;
        padding: 10px;
        padding-top: 30px;
        padding-bottom: 50px;
    }
`;

export const RegisterHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export const RegisterHeaderTitle = styled.h2`
    font-size: 24px;
    font-weight: 400;

    @media (max-width: 580px) {
        font-size: 20px;
    }
`;

export const RegisterForm = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
`;

export const FormLabel = styled.label`
    font-size: 16px;
    margin-bottom: 10px;

    @media (max-width: 580px) {
        font-size: 14px;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    height: 50px;
    background-color: #F8F8F8;
    border: none;
    border-radius: 10px;
    outline: none;
    text-indent: 15px;
    font-size: 14px;

    @media (max-width: 580px) {
        font-size: 12px;
    }

    &::placeholder {
        @media (max-width: 580px) {
            font-size: 12px;
        }
    }
`;

export const Link = styled.a`
    font-size: 14px;
    color: #3D8FE7;

    &:hover {
        color: #3072b8;
    }

    @media (max-width: 580px) {
        font-size: 12px;
    }
`;

export const RegisterButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #3D8FE7;
    color: #fff;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    margin: 10px 0;
    outline: none;
    cursor: pointer;

    img {
        width: 27px;
        height: 27px;

        @media (max-width: 580px) {
            width: 25px;
            height: 25px;
        }
    }

    &:hover {
        background-color: #3072b8;
    }

    @media (max-width: 580px) {
        font-size: 17px;

        &:hover {
            background-color: #3D8FE7;
        }

        &:active {
            background-color: #3072b8;
        }
    }
`;

export const errorContainer = styled.div`
    display: none;
    align-items: center;
    justify-content: start;
    font-size: 14px;
    color: red;
    margin-bottom: 10px;
`;

export const RegisterInfo = styled.div`
    span {
        font-size: 14px;
        margin-right: 10px;

        @media (max-width: 580px) {
            font-size: 12px;
        }
    }
`;