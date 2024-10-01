import React from 'react';
import { imgs } from '../assets/assets';
import Message from './Message';

function MessageView({ selectedSession }) {
    return (
        <div className='h-full w-full md:w-2/3 m-0'> 
            <div className='h-24 flex items-center gap-5 ml-5'>
                <img src={imgs.dp1} alt="User Avatar" className="h-16 w-16 rounded-full " />
                <h1 className='text-xl font-semibold'>{selectedSession ? "Session " + selectedSession.id : 'Select a Session'}</h1>
            </div>
            <div className='p-4 overflow-y-auto h-[calc(100%-96px)] bg-gray-100'>
                {selectedSession ? (
                    selectedSession.messages.map((message) => (
                        <Message key={message.id} message={message} />
                    ))
                ) : (
                    <p className='text-center font-bold text-2xl text-[#000929]'>Chat Sessions Dashboard</p>
                )}
            </div>
        </div>
    );
}

export default MessageView;
