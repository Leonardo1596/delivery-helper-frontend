import React, { useState } from 'react';
import * as C from './styles';
import { useDispatch } from 'react-redux';
import { setAuth, setUserId } from '../../redux/action';
import { FaRegCircleUser, FaBars } from "react-icons/fa6";

const Index = (props) => {
    const dispatch = useDispatch();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function handleDropdownButton() {
        const dropdown = document.querySelector('.dropdown');

        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };;

    const handleLogin = () => {
        props.handleLoginClick();
    }

    const handleRegister = () => {
        props.handleRegisterClick();
    }

    const handleLogout = () => {
        dispatch(setAuth(false));
        dispatch(setUserId(''));
    }

    return (
        <div>
            <C.Sidebar isOpen={isSidebarOpen}>
                <C.SiderbarHeaderContainer>
                    <C.SidebarHeader>Menu</C.SidebarHeader>
                </C.SiderbarHeaderContainer>
                <C.SidebarMenuList>
                    <C.SidebarItemList><a href="/inicio">Acompanhar</a></C.SidebarItemList>
                    <C.SidebarItemList><a href="/lancamentos">Lançamentos</a></C.SidebarItemList>
                    <C.SidebarItemList><a href="#">Organização de gastos</a></C.SidebarItemList>
                </C.SidebarMenuList>
            </C.Sidebar>
            <C.Overlay isOpen={isSidebarOpen} onClick={handleSidebarToggle} />
            <C.Header>
                <C.container>
                    <C.HamburgerIcon onClick={handleSidebarToggle}><FaBars /></C.HamburgerIcon>
                    <C.NavbarBrand><a href="/inicio">Delivery Helper</a></C.NavbarBrand>
                    <C.MenuList>
                        <C.itemList><a href="/inicio">Acompanhar</a></C.itemList>
                        <C.itemList><a href="/lancamentos">Lançamentos</a></C.itemList>
                        <C.itemList><a href="#">Organização de gastos</a></C.itemList>
                    </C.MenuList>
                    <C.MenuAccount>
                        <C.Icon>
                            <FaRegCircleUser onClick={handleDropdownButton} />
                        </C.Icon>
                    </C.MenuAccount>

                    <C.Dropdown className='dropdown'>
                        <C.DropdownContainer>
                            {/* <C.DropdownItem><a href="">Perfil</a></C.DropdownItem> */}
                            <C.DropdownItem><a href="/configuracoes">Configurações</a></C.DropdownItem>
                            <C.DropdownItem onClick={handleLogout}>Deslogar</C.DropdownItem>
                        </C.DropdownContainer>
                    </C.Dropdown>
                </C.container>
            </C.Header>
        </div>
    )
}

export default Index