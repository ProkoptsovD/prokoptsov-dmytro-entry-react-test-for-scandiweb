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
                    <Navbar
                        categories={this.props.categories}
                        categorybyDefault={this.props.categorybyDefault}
                    />
					<Logo />
                    <Actionbar />
                </div>
            </header>
        )
    }
}

export default Header;