import React from 'react';

const Slider = () => {
    return (
        <div className="bg-[url('/src/Components/images/more/6.jpeg')] bg-cover w-full h-[500px] rounded-md mt-3 text-white flex justify-center items-center">
            <div className='space-y-3'>
                <h2 className='text-xl font-bold'>Would You like to have a cup of coffee?</h2>
                <p className='text-xs'>We ensure the best quality coffe and garantee for our Awesome test</p>
                <button className='btn btn-outline btn-success'>Buy One</button>
            </div>
        </div>
    );
};

export default Slider;