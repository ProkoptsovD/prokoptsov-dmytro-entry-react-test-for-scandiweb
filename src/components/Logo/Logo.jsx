import React from "react";
import logo from '../../icons/logo.svg';

class Logo extends React.Component {
    render() {
        return (
            <>
                <img src={logo} alt="Internet-store logo" />
            </>
        )
    }
}

export default Logo;