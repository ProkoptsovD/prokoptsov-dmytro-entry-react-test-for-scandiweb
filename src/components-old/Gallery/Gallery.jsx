import React from "react";
import ProductImage from "../ProductImage/ProductImage";
import PrevNextButtons from '../ButtonSvgOnly/PrevNextButtons/PrevNextButtons'
import './Gallery.scss';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPic: 0,
            totalPics: 0,
        }
    }
    renderImages = (imageUrlsArr) => {
        return imageUrlsArr.map((url, idx) => (
            <li 
                id={idx}
                key={idx}
                data-gallery={`${this.props.productId}`}
                className={`gallery__item ${idx === this.state.currentPic ? 'show-pic' : ''}`}>
                <ProductImage key={idx} src={url}/>
            </li>
        ));
    };
    componentDidMount() {
        const totalPics = this.props.gallery.length;
        this.setState({
            ...this.state,
            totalPics: totalPics,
        });
    };
    showPic = (picNumber) => {
        const allPics = document.querySelectorAll(`[data-gallery=${this.props.productId}]`);
        allPics.forEach(pic => +pic.id === +picNumber ? pic.classList.add('show-pic') : pic.classList.remove('show-pic'));
    };
    nextPic = () => {
        const isLastPic = this.state.currentPic + 1 >= this.state.totalPics;
        console.log(this.state.currentPic);
        console.log(this.state.totalPics);

        this.setState({
            ...this.state,
            currentPic: isLastPic ? 0 : this.state.currentPic += 1,
        });
    };
    prevPic = () => {
        const isFirstPic = this.state.currentPic <= 0;

        this.setState({
            ...this.state,
            currentPic: isFirstPic ? this.state.totalPics - 1 : this.state.currentPic -= 1,
        });
    };
    render() {
        return (
            <div className="gallery">
                <ul className="gallery__list">
                    {this.renderImages(this.props.gallery)}
                </ul>
                {this.state.totalPics >= 2 && <PrevNextButtons
                    nextPic={() => {
                        this.nextPic();
                        this.showPic(this.state.currentPic);
                    }}
                    prevPic={() => {
                        this.prevPic();
                        this.showPic(this.state.currentPic);
                    }}
                />}
            </div>
        )
    }
}

export default Gallery;