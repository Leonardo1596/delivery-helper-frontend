import styled from 'styled-components';

export const Header = styled.header`
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center;

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

export const container = styled.div`
    width: 1157px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const HamburgerIcon = styled.div`
    display: none;
    font-size: 22px;
    cursor: pointer;

    @media (max-width: 1024px) {
        display: flex;
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const NavbarBrand = styled.h1`
    font-family: 'Nunito Sans';
    font-weight: bold;
    font-size: 24px;

    a {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 1024px) {
        font-size: 22px;
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const itemList = styled.li`
    font-family: 'Nunito Sans';
    font-weight: regular;
    font-size: 16px;
    margin-right: 20px;
    color: #333;

    a {
        text-decoration: none;
        color: inherit;
    }

    &:hover {
        color: black;
    }
`;

export const MenuAccount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 23px;
    background-color: transparent;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    width: 200px;
    position: absolute;
    right: 0;
    top: 60px;
    background-color: #fff;
    padding: 10px;
    font-family: 'Nunito Sans';
    display: none;
    border-radius: 25px;

    @media (max-width: 768px) {
        width: 150px;
    }
`;

export const DropdownContainer = styled.ul`
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #CECECE;

    @media (max-width: 768px) {
        margin-bottom: 5px;
    }
`;

export const DropdownItem = styled.li`
    list-style: none;
    margin-bottom: 5px;
    color: #272727;
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
        text-decoration: none;
        color: inherit;
    }
`;