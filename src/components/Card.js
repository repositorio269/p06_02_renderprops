import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            formatPrice: ''
        }
    }

    componentDidMount() {
        this.setState({
            formatPrice: new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'})
                                 .format(this.props.house.price)
        })
    }


    render() {
        return (
            <div className='card'>
                {this.props.render(this.props.house.title, this.state.formatPrice, this.props.house.pic)}
            </div>
        )
    }
}
