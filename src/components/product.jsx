import React, { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            count: 0,
            imageUrl: "https://picsum.photos/100"
        };
    }

    increase() {
        this.setState({ count: this.state.count + 1 });
    }

    decrease() {
        let { count } = this.state;
        if (count !== 0) {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        return (
            <div className="card">
                <img src={this.state.imageUrl} alt="" />
                <div className="input-group mb-3">
                    <div className="input-group-text">
                        {this.state.productName}
                    </div>

                    <div className="input-group-append">
                        <button
                            onClick={this.increase.bind(this)}
                            type="button"
                            className="btn btn-success btn-sm"
                        >
                            +
                        </button>
                        <button
                            onClick={this.decrease.bind(this)}
                            type="button"
                            className="btn btn-danger btn-sm"
                        >
                            -
                        </button>

                        <div className="badge badge-secondary">
                            {this.state.count}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
