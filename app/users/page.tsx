import React from 'react'
import { Interface } from 'readline';

interface User {
    name: string;
    id: number;
}

const UserPage = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await data.json();


    return (
        <>
            <div>Usesrs</div>
            {
                users.map((user) => (
                    <ul>
                        <li key={user.id}>
                            {user.name}
                        </li>
                    </ul>
                ))}
        </>
    )
}

export default UserPage;
