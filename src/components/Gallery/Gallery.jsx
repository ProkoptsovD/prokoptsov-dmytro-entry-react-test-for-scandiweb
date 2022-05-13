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
            <ul className={"gallery"}>
                <li className={"gallery__item"}>pic-1</li>
                <li className={"gallery__item"}>pic-2</li>
                <li className={"gallery__item"}>pic-3</li>
            </ul>
        )
    }
}

export default Gallery;