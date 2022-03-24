import React, { Component } from 'react'
import Card from '../components/Card';

export default class Houses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.setState({
            houses: [
                {id: 1, title: 'Villa en Los Altos', price: 2000000, pic: 'https://i.ibb.co/6RhzdWb/property2.jpg'},
                {id: 2, title: 'Villa en La Finca', price: 2500000, pic: 'https://i.ibb.co/DW27TmQ/property1.jpg'},
                {id: 3, title: 'Villa en Puerto Banús', price: 3300000, pic: 'https://i.ibb.co/r5nPNc4/property3.jpg'},
                {id: 4, title: 'Villa en La Quinta Golf', price: 4300000, pic: 'https://i.ibb.co/k0PQR34/property4.jpg'},
            ]
        })
    }

    render() {
        return (
            <div className='fila grid'>
                {this.state.houses.map(house => {
                    return <Card key={house.id} 
                                 house={house} 
                                 render={(title, price, pic) => {
                                    return (
                                        <>
                                            <img src={pic} alt="" />
                                            <div className="footer-card">
                                                <div>
                                                    <p>{title}</p>
                                                    <p>{price}</p>
                                                </div>
                                                <button>Mas información</button>
                                            </div>
                                        </>
                                    )
                                 }}/>
                })}
            </div>
        )
    }
}
