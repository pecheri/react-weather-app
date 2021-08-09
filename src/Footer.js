import React from 'react';

function Footer() {
    let day = new Date();
    let year = day.getFullYear();
    return (
        <div className="text-right pt-40 mr-10 pb-5">
            <small className="w-screen font-baloo text-amber-400">&copy; {year} Ryo Inciong</small>
        </div>
    );
}

export default Footer;
