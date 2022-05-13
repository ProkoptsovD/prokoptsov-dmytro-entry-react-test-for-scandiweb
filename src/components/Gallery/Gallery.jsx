import React from "react";
import './Gallery.scss';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    renderGalleryItems = ({}) => {
        return 
    }

    render() {
        return (
            <ul>
                <li>pic-1</li>
                <li>pic-2</li>
                <li>pic-3</li>
            </ul>
        )
    }
}

export default Gallery;