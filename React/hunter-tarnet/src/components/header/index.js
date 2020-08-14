import React from 'react';
import MenuContainer from './components/menu-container'
import MenuItem from './components/menu-container/components/menu-item'
import RightMenuContainer from './components/menu-container/components/right-menu-container'
import RightMenuItem from './components/menu-container/components/right-menu-container/components/right-menu-item'
import LanguageContext from '../../context/language-context';
import SearchBox from './components/menu-container/components/right-menu-container/components/search-box';
import LanguageSelector from './components/menu-container/components/right-menu-container/components/language-selector';

//FUNCTIONAL COMPONENT
const Header = () =>
    <LanguageContext.Consumer>{
        (value) => value.selectedLanguage === 'tr' ?
            <MenuContainer>
                <MenuItem url="/">Gösterge Paneli</MenuItem>
                <MenuItem url="/category">Kategoriler</MenuItem>
                <MenuItem url="/unit">Birimler</MenuItem>
                <MenuItem url="/hooks">Çengeller</MenuItem>
                <RightMenuContainer>
                    <RightMenuItem><SearchBox></SearchBox></RightMenuItem>
                    <RightMenuItem><LanguageSelector></LanguageSelector></RightMenuItem>
                </RightMenuContainer>
            </MenuContainer> :
            <MenuContainer>
                <MenuItem url="/">Dashboard</MenuItem>
                <MenuItem url="/category">Categories</MenuItem>
                <MenuItem url="/unit">Units</MenuItem>
                <MenuItem url="/hooks">Hooks</MenuItem>
                <RightMenuContainer>
                    <RightMenuItem><SearchBox></SearchBox></RightMenuItem>
                    <RightMenuItem><LanguageSelector></LanguageSelector></RightMenuItem>
                </RightMenuContainer>
            </MenuContainer>
    }
    </LanguageContext.Consumer>

export default Header;