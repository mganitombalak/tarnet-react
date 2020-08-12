import React from 'react';
import MenuContainer from './components/menu-container'
import MenuItem from './components/menu-container/components/menu-item'
import RightMenuContainer from './components/menu-container/components/right-menu-container'
import RightMenuItem from './components/menu-container/components/right-menu-container/components/right-menu-item'
//FUNCTIONAL COMPONENT
const Header = () => <MenuContainer>
    <MenuItem url="/">Dashboard</MenuItem>
    <MenuItem url="/menu1">Menu-I</MenuItem>
    <MenuItem url="/menu2">Menu-II</MenuItem>
    <MenuItem url="/menu3">Menu-III</MenuItem>
    <MenuItem url="/menu4">Menu-IV</MenuItem>
    <RightMenuContainer>
        <RightMenuItem></RightMenuItem>
    </RightMenuContainer>
</MenuContainer>

export default Header;