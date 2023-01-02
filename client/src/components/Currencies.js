import { Component } from "react";

class Currencies extends Component {
    constructor(props) {
        super(props);
        // later on use hooks?
        this.state = {
            currencies: []
        }
    }

    componentDidMount() {
        fetch('/api/currencies')
            .then(res => res.json())
            .then(currencies => {
                this.setState({currencies : currencies})
            })

    }

    render() {
        return (
            <div>
                <h1>Hello world React 2</h1>
                <ul>
                    {
                        this.state.currencies.map((currency, index) => {
                            return <li key={index}>{currency.name} {currency.value}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Currencies;
