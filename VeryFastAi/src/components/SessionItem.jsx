import React from 'react';
import { imgs } from '../assets/assets';

function SessionItem({ session, isLastItem, lastSessionRef, onClick }) {
    return (
        <div
            className='border-b ml-5 mr-3 flex items-center justify-between h-20 cursor-pointer p-2 hover:bg-[#C8C8FF] rounded-xl'
            onClick={() => onClick(session)}
            ref={isLastItem ? lastSessionRef : null} 
        >
            <div className='flex gap-5'>
                <img src={imgs.dp1} alt="User Avatar" className="h-16 w-16 rounded-full" />
                <h1 className='font-semibold text-[#000929]'>{"Session " + session.id}</h1>
            </div>
            <div>
                <h2 className='text-[#76767CCC] pb-10'>Agent</h2>
            </div>
        </div>
    );
}

export default SessionItem;
