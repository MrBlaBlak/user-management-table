
import React from 'react';

import TableBody from "@/app/components/TableBody";

const UserManagementTable = async () => {

    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json());

    return (
        <table
            className="table table-zebra table-sm">
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            </thead>
            <TableBody users={users}/>
        </table>

    );
};

export default UserManagementTable;