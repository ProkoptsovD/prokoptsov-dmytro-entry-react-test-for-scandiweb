import React from "react";
import AddRemoveItemBar from "../AddRemoveItemBar/AddRemoveItemBar.jsx";
import ColorPicker from "../ColorPicker/ColorPicker.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import SizePicker from "../SizePicker/SizePicker.jsx";
import './BagItem.scss';
import { hashify } from "../../helpers/helpers.js";

class BagItem extends React.Component {
    renderAttrPickers = (arrWithAttributes) => {
        return arrWithAttributes.map(({name, items, type}) => {
            const SWATCH_TYPE = 'swatch';
            const nameHashSp = `${name}-${hashify()}`;
            const nameHashCp = `${name}-${hashify()}`;

            const sizePicker = (
                <SizePicker key={name + nameHashSp} name={name} attrItems={items}
                selectedOptions={this.props.selectedOptions}
                hashedName={nameHashSp} />
            );
            const colorPicker = (
                <ColorPicker pickerTitle={"bag-item__color-picker-title"}
                    key={name + nameHashCp}
                    className={"bag-item__color-picker"}
                    name={name}
                    attrItems={items}
                    hashedName={nameHashCp}
                    selectedOptions={this.props.selectedOptions}
                />
            );

            return SWATCH_TYPE === type ? colorPicker : sizePicker;
        })
    }
    render() {
        console.log(this.props);
        const { brand, name, id, prices, gallery} = this.props.product;
        const {symbol: actualSymbol, label: actualLabel} = this.props.currency;
        const actualPrice = prices.find(price => price.currency.label === actualLabel && price.currency.symbol === actualSymbol);

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
                    {this.renderAttrPickers(this.props.product.attributes)}
                </div>
                <AddRemoveItemBar />
                <Gallery
                    gallery={gallery}
                    productId={id}
                />
            </div>
        )
    }
}

export default BagItem;