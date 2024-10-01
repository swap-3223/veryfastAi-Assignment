import React, { useEffect, useState, useRef } from 'react';
import Sidebar from './Sidebar';
import MessageView from './MessageView';

function Dashboard() {
    const [sessions, setSessions] = useState([]);
    const [selectedSession, setSelectedSession] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observer = useRef();

    useEffect(() => {
        fetchSessions();
    }, [currentPage]);

    const fetchSessions = () => {
        if (loading) return; 
        setLoading(true);

        fetch(`https://admin-backend-docker-india-306034828043.asia-south2.run.app/nlp/api/chat_sessions?page=1&per_page=20`)
            .then((res) => res.json())
            .then((data) => {
                setSessions((prevSessions) => [...prevSessions, ...data.chat_sessions]);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    const lastSessionRef = (node) => {
        if (loading) return; 
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setCurrentPage((prevPage) => prevPage + 1);
            }
        });

        if (node) observer.current.observe(node);
    };

    const handleSessionClick = (session) => {
        setSelectedSession(session);
    };

    return (
        <div className='h-screen w-screen flex flex-col md:flex-row'>
            <Sidebar 
                sessions={sessions} 
                loading={loading} 
                lastSessionRef={lastSessionRef} 
                handleSessionClick={handleSessionClick} 
            />
            <MessageView selectedSession={selectedSession} />
        </div>
    );
}

export default Dashboard;


