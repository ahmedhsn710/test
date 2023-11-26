import React, { useState } from 'react';
import './products.css';
import Card from './Card'; 

const Products = () => {
    const [toggleState, setToggleState] = useState(false);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title"><b className='caps'>O</b>ur <b className='caps'>P</b>roducts</h2>
            <span className="section__subtitle">What we provide</span>

            

            <div className='projects__container container grid'>
                <Card/>
                <Card/>

                <Card/>
                <Card/>
            </div>
        </section>
    )
}

export default Products