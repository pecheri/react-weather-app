import React from 'react';

function Header() {
    return (
        <div className="relative sm:w-screen flex justify-center sm:h-24">
            <h1 className="text-amber-400 text-6xl font-pacifico pt-8 pl-10 absolute top-0 left-0 z-50 sm:text-5xl sm:pt-5 sm:pl-5">
                Weather
            </h1>
            <h1 className="text-white text-6xl font-pacifico pt-8 pl-10 absolute top-1 left-1 sm:text-5xl sm:pt-5 sm:pl-5">
                Weather
            </h1>
        </div>
    );
}

export default Header;
