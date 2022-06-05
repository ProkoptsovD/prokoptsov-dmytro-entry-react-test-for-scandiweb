import React from "react";
import './OrderInfo.scss';

class OrderInfo extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
             <table className={"order-info"}>
                <tbody>
                    <tr>
                        <td>Tax 21%:</td>
                        <td>$42.00</td>
                    </tr>
                    <tr>
                        <td>Quantity:</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>$42.00</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default OrderInfo;