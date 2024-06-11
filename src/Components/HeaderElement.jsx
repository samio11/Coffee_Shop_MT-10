import React from 'react';

const HeaderElement = () => {
    return (
        <div className="h-[15vh] bg-[url('/src/Components/images/more/15.jpg')] bg-contain rounded-md flex justify-center items-center">
            <div className='flex justify-center items-center gap-2 text-white'>
                <img className='w-[50px] h-[50px]' src="/src/Components/images/more/logo1.png" alt="" />
                <p>Samio Shop</p>
            </div>
        </div>
    );
};

export default HeaderElement;