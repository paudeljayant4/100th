import React, { useState } from 'react';

// Mock data for the components
const timelineEvents = [
    { date: '2022-04-26', event: 'Started the journey!' },
    { date: '2023-04-26', event: 'First major milestone reached!' },
    { date: '2024-04-26', event: 'Second major milestone reached!' },
    { date: '2025-04-26', event: 'Quarter century of success!' },
    { date: '2026-04-26', event: 'Anniversary celebration!' }
];

const reasons = [
    'Hard work and dedication',
    'Support from family and friends',
    'Learning from challenges',
    'Innovation and creativity'
];

const photos = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg'
];

const bucketList = [
    'Travel to Japan',
    'Write a book',
    'Start a new hobby'
];

const App = () => {
    const [showLetterModal, setShowLetterModal] = useState(false);

    const toggleLetterModal = () => {
        setShowLetterModal(!showLetterModal);
    };

    return (
        <div>
            <h1>Happy Anniversary!</h1>
            <h2>Timeline</h2>
            <ul>
                {timelineEvents.map((event, index) => (
                    <li key={index}>{event.date}: {event.event}</li>
                ))}
            </ul>
            <h2>Reasons to Celebrate</h2>
            <ul>
                {reasons.map((reason, index) => (
                    <li key={index}>{reason}</li>
                ))}
            </ul>
            <h2>Photo Gallery</h2>
            <div>
                {photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`photo${index + 1}`} style={{ width: '100px', margin: '10px' }} />
                ))}
            </div>
            <h2>Bucket List</h2>
            <ul>
                {bucketList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={toggleLetterModal}>Open Letter Modal</button>
            {showLetterModal && (
                <div style={{ border: '1px solid black', padding: '20px', marginTop: '20px' }}>
                    <h2>Letter to Everyone</h2>
                    <textarea rows="5" cols="50" placeholder="Write your letter here..." />
                    <br />
                    <button onClick={toggleLetterModal}>Close</button>
                </div>
            )}
        </div>
    );
};

export default App;