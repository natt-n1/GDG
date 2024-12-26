import React from 'react';

// Functional Component to display group members
const GroupMembers = () => {
    // Array of group members' names
    const members = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

    return (
        <div>
            <h1>Group Members</h1>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
        </div>
    );
};

export default GroupMembers;
