import React, { Component } from 'react';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost/api'
});

class Item extends Component {
    constructor(props) {
        super(props);
        
        this.state = {}
    }

    componentWillMount() {
        this.fetchData(this.props.fqn);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchData(nextProps.fqn);
    }

    fetchData(fqn) {
        apiClient.get('/v1/item/read/' + fqn)
        .then((response) => {
            this.setState(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <table width="400" style={{textAlign: 'left'}}>
                <tbody>
                    <tr>
                        <td><strong>FQN</strong></td>
                        <td>{this.state.FQN}</td>
                    </tr>
                    <tr>
                        <td><strong>Timestamp</strong></td>
                        <td>{this.state.Timestamp}</td>
                    </tr>
                    <tr>
                        <td><strong>Quality</strong></td>
                        <td>{this.state.Quality}</td>
                    </tr>
                    <tr>
                        <td><strong>AccessMode</strong></td>
                        <td>{this.state.AccessMode}</td>
                    </tr>
                    <tr>
                        <td><strong>Value</strong></td>
                        <td>{this.state.Value}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Item