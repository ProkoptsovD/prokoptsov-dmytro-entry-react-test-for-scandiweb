import React from "react";
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <header className="header">
                <div className="container header__container">
                    {this.props.children}
                </div>
            </header>
        )
    }
}

export default Header;