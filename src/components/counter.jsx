import React, { Component } from "react";
import Product from "../components/product";

class Counter extends Component {
    Product = (props) => {
        return <p>{props.text}</p>;
    };

    state = {
        totalCount: 0,
        productNames: []
    };

    styles = {
        fontSize: 16,
        fontWeight: "bold"
    };

    render() {
        return (
            <div>
                <div>
                    <div>
                        Total articles
                        <div
                            style={this.styles}
                            className="badge badge-primary m-2"
                        >
                            {this.updateTotal()}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Product productName={"Apple"} />
                    <Product productName={"Banana"} />
                    <Product productName={"Citrus"} />
                </div>
            </div>
        );
    }

    updateTotal() {
        const { totalCount } = this.state;
        return totalCount === 0 ? "Zero" : totalCount;
    }
}

export default Counter;
