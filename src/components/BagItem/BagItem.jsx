import React from "react";
import AddRemoveItemBar from "../AddRemoveItemBar/AddRemoveItemBar.jsx";
import ColorPicker from "../ColorPicker/ColorPicker.jsx";
import ProductImage from "../ProductImage/ProductImage.jsx";
import SizePicker from "../SizePicker/SizePicker.jsx";
import './BagItem.scss';

class BagItem extends React.Component {
    renderSizePicker = () => {
        
    }
    renderColorPicker = () => {

    }
    render() {
        const { brand, name, id, prices, gallery} = this.props.product;
        const [previewImageUrl] = gallery;
        const {symbol: actualSymbol, label: actualLabel} = this.props.currency;
        const actualPrice = prices.find(price => price.currency.label === actualLabel && price.currency.symbol === actualSymbol);
        console.log(this.props);
        return (
            <div className="bag-item">
                <div className="bag-item__wrapper-inner">
                    <p className="bag-item__brand">
                        {brand}
                    </p>
                    <h4 className="bag-item__title">
                        {name}
                    </h4>
                    <strong className="bag-item__price">
                        {actualPrice.currency.symbol}{actualPrice.amount}
                    </strong>
                    {this.props.product.attributes.map(({name, items, type}) => {
                        console.log(type);
                        const SWATCH_TYPE = 'swatch';

                        const sizePicker = (
                            <SizePicker 
                                key={name}
                                name={name}
                                attrItems={items}
                            />
                        );
                        const colorPicker = (
                            <ColorPicker
                                key={name}
                                pickerTitle={"bag-item__color-picker-title"}
                                className={"bag-item__color-picker"}
                                name={name}
                                attrItems={items}
                            />
                        );

                        return type === SWATCH_TYPE ? colorPicker : sizePicker;
                    })}
                </div>
                <AddRemoveItemBar />
                <ProductImage />
            </div>
        )
    }
}

export default BagItem;