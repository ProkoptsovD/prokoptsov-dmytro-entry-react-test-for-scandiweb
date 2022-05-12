import React from "react";
import logo from '../../icons/logo.svg';
import './Logo.scss';

class Logo extends React.Component {
    render() {
        return (
            <>
                <img
                    className="logo"
                    src={logo}
                    alt="Internet-store logo" />
            </>
        )
    }
}

export default Logo;