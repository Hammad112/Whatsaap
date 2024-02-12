import React from 'react';

function Buttons({icon,Click}) {
    return (
        <button className='text-[#8796a1] text-xl p-2 rounded-full hover:[#3c454c]' onClick={Click}>
            {icon}
        </button>
    );
}

export default Buttons;