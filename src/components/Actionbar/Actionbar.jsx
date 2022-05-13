import React from "react";
import './Actionbar.scss';

class Actionbar extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }
    renderChildren = (child, index) => {
        return (
            <li
                key={index}
                className={"action-bar__item"}
            >
                {child}
            </li>
        )
    }
    
    render() {
        return (
            <ul className="action-bar">
                {
                    this.props.children instanceof Array
                        ? this.props.children.map(this.renderChildren)
                        : <li
                            className="action-bar__item"
                        >
                            {this.props.children}
                        </li>
                }
            </ul>
        )
    }
}

export default Actionbar;