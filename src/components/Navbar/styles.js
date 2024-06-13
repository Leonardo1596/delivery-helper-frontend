import styled from 'styled-components';

export const Sidebar = styled.div`
    font-family: 'Nunito Sans';
    position: absolute;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-50%')};
    width: 50%;
    height: 100%;
    background-color: #fff;
    z-index: 1000;
    transition: left 0.3s ease;
    
    @media (max-width: 768px) {
        left: ${({ isOpen }) => (isOpen ? '0' : '-60%')};
        width: 60%;
        }
        `;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    z-index: 999;
    `;

export const SiderbarHeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: start;
    color: #fff;
    background-color: darkgrey;
    `;

export const SidebarHeader = styled.h2`
    padding: 0 20px;
    font-weight: bold;
    font-size: 24px;

    @media (max-width: 500px) {
        font-size: 20px;
    }
    `;

export const SidebarMenuList = styled.ul`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    `;

export const SidebarItemList = styled.li`
    display: flex;
    align-items: center;
    font-weight: regular;
    font-family: 'Nunito Sans';
    font-size: 16px;
    /* margin-bottom: 25px; */
    color: #333;
    background-color: #fff;
    padding: 0 20px;
    width: 100%;
    height: 55px;
    cursor: pointer;
    transition: all 0.150s;

    a {
        text-decoration: none;
        color: inherit;
    }

    &:hover {
        color: #fff;
        background-color: #3D8FE7;
    }

    @media (max-width: 500px) {
        font-size: 14px;

        &:hover {
        color: #333;
        background-color: #fff;

        &:active {
            background-color: #3D8FE7;
        }
    }
    }
`;

export const Header = styled.header`
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    position: relative;
    font-family: 'Nunito Sans';

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

    @media (max-width: 500px) {
        font-size: 17px;
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