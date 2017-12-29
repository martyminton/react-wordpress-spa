import React, { Component } from 'react';
import { database } from './Firebase.jsx';

class DealerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            dealer_info: null,
            dealer_social: null,
            dealer_phone: null
        };
    }

    componentDidMount() {
        var query = database.ref();

        query.on('value', snapshot => {
            this.setState({
                data: snapshot.val()
            });
        }),
            database.ref('/dealer_info/dealer_phone').on('value', snapshot => {
                this.setState({
                    dealer_phone: snapshot.val()
                });
            });
    }

    render() {
        return <pre>{JSON.stringify(this.state.data, null, 1)}</pre>;
    }
}

export default DealerInfo;
