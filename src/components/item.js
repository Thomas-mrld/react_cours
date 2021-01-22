import React, { Component } from 'react'

class item extends Component {
    render(){
        return (
            <div>
                <h3>
                    <span style={{ 
                        display: 'inline-block', 
                        width : '30px', 
                        height: '30px', 
                        borderRadius: '30px', 
                        backgroundColor: 'green'}}></span>{' '}
            Mon Super Titre
            </h3>
            Item</div>
        );
    }
}

export default item;