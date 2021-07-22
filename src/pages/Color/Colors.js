import React, { Component } from 'react'

const Colors = (props) => {
    
        const {colors} = props;
        return (
            <div className="colors">
                {
                    colors?.map((color,index) =>(
                        <button key={index} style={{background: color}}></button>
                    ))
                }
            </div>
        )
}

export default Colors
