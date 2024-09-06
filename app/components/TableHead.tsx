import React from 'react';

type Props = {};
const TableHead = ({}: Props) => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        </thead>
    );
};
export default TableHead;