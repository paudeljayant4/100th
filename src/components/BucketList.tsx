import React, { useState } from 'react';

const BucketList = () => {
    const [items, setItems] = useState([{ text: 'Visit Japan', completed: false }, { text: 'Skydiving', completed: false }, { text: 'Learn Guitar', completed: false }]);

    const toggleCompletion = (index) => {
        const newItems = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    };

    return (
        <div>
            <h1>My Bucket List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleCompletion(index)}
                            />
                            {item.text} {item.completed ? ' ✅' : ''}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BucketList;