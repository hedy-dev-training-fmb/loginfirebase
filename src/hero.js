import React from 'react';

const Hero = ({handleLogout}) => {

    return (
        <section className="dashboard">
            <nav>
                <h2>Bienvenido</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
        
    )

}

export default Hero;