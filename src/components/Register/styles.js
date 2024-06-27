import styled from 'styled-components';

export const RegisterContainer = styled.div`
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 17px;
    position: relative;
    font-family: 'Nunito Sans';

    @media (max-width: 520px) {
        width: 370px;
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
    font-size: 1.375rem;
    font-weight: 400;

    @media (max-width: 580px) {
        font-size: 1.125rem;
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
    font-size: 1rem;
    margin-bottom: 10px;

    @media (max-width: 580px) {
        font-size: 0.875rem;
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
    font-size: 0.875rem;

    @media (max-width: 580px) {
        font-size: 0.813rem;
    }

    &::placeholder {
        @media (max-width: 580px) {
            font-size: 0.813rem;
        }
    }
`;

export const Link = styled.a`
    font-size: 0.875rem;
    color: #3D8FE7;

    &:hover {
        color: #3072b8;
    }

    @media (max-width: 580px) {
        font-size: 0.813rem;
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
    font-size: 1.25rem;
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
        font-size: 1.063rem;

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
    font-size: 0.875rem;
    color: red;
    margin-bottom: 10px;
`;

export const RegisterInfo = styled.div`
    span {
        font-size: 0.875rem;
        margin-right: 5px;

        @media (max-width: 580px) {
            font-size: 0.813rem;
        }
    }
`;