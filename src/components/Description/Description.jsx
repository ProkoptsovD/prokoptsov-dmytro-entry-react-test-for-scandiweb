import React from "react";
import parse from 'html-react-parser';
import './Description.scss';

class Description extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <>
                <div className="description">
                    {parse(this.props.descrHTML)}
                </div>
            </>
        )
    }
}

export default Description;