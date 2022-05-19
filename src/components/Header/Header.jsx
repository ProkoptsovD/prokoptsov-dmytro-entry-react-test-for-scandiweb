import React from "react";
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import Actionbar from '../Actionbar/Actionbar';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container header__container">
                    <Navbar {...this.props}/>
					<Logo />
                    <Actionbar updateCurrentCategoryPage={this.props.initCurrentCategory}/>
                </div>
            </header>
        )
    }
}

export default Header;