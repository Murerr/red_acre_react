import { Component } from "react";

class Currencies extends Component {
    constructor(props) {
        super(props);
        // later on use hooks?
        this.state = {
            currencies: [],
            rates: []
        }
    }

    componentDidMount() {
        /*fetch('/api/currencies')
            .then(res => res.json())
            .then(currencies => {
                this.setState({currencies : currencies})
            })*/
        fetch('/api/rates/')
            .then(res => res.json())
            .then(rates => {
                this.setState({rates : rates})
            })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th><b>Date & Time</b></th>
                            <th>Currency From</th>
                            <th>Amount 1</th>
                            <th>Currency To</th>
                            <th>Amount 2</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.rates.map((rate, index) => {
                                return (
                                <tr key={index}>
                                    <td>{new Date().toLocaleString()}</td>
                                    <td>USD</td>
                                    <td>1</td>
                                    <td>{rate[0]}</td>
                                    <td>{rate[1]}</td>
                                    <td>Live Price</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Currencies;
