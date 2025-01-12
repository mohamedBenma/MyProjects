import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* les images sont importées depuis le dossier public(c'est comme-ci on s'était placés au niveau du dossier public) */}
            <img src="./images/logo.jpg" alt="" />
            <h2> Catch The Twins</h2>

        </div>
    );
};

export default Logo;