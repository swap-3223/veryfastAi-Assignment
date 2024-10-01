import React from 'react';

function Message({ message }) {
    return (
        <div className={`my-2 flex ${message.action === 'USER' ? 'justify-start' : 'justify-end'}`}>
            <div
                className={`p-2 rounded-lg ${message.action === 'USER' ? 'bg-[#000929] text-left w-80' : 'bg-[#2E3B5B] w-80'}`}
            >
                <p className='text-white'>{message.content}</p>
                <span className='text-xs text-gray-400 block mt-1 text-right'>
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    );
}

export default Message;
