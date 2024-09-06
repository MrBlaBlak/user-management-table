
import React from 'react';

import TableBody from "@/app/components/TableBody";
import TableHead from "@/app/components/TableHead";

const UserManagementTable = async () => {

    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json());

    return (
        <table className="table table-zebra table-sm">
            <TableHead/>
            <TableBody users={users}/>
        </table>
    );
};

export default UserManagementTable;