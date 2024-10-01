import React from 'react';
import SessionItem from './SessionItem';

function Sidebar({ sessions, loading, lastSessionRef, handleSessionClick }) {
    return (
        <div className='h-full w-full md:w-1/3 m-0 bg-white overflow-y-auto'> 
            <div className='h-24 flex w-1/3 items-center fixed bg-white '>
                <h1 className='text-2xl font-semibold text-[#000929] ml-10'>Messaging</h1>
            </div>
            <div className='mt-24'>
                {sessions.map((session, index) => (
                    <SessionItem 
                        key={session.id} 
                        session={session} 
                        isLastItem={sessions.length === index + 1} 
                        lastSessionRef={lastSessionRef} 
                        onClick={handleSessionClick} 
                    />
                ))}
                {loading && <div className='text-center py-2 text-[#000929]  font-bold'>Loading more sessions...</div>}
            </div>
        </div>
    );
}

export default Sidebar;
