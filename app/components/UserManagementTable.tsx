'use client'
import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../redux/store';
import {setFilter, setUsers} from '../redux/userSlice';
import {useAppDispatch, useAppSelector} from "@/app/redux/hooks";

type Props = { users: any };
const UserManagementTable = ({users}: Props) => {
    const dispatch = useAppDispatch<AppDispatch>();
    const {filteredUsers, filters, status} = useAppSelector((state: RootState) => state.users)

    useEffect(() => {
        dispatch(setUsers(users));
    }, [dispatch]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        dispatch(setFilter({key: name, value}));
    };

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error loading users</div>;

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Filter by name"
                    name="name"
                    value={filters.name}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    placeholder="Filter by username"
                    name="username"
                    value={filters.username}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    placeholder="Filter by email"
                    name="email"
                    value={filters.email}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    placeholder="Filter by phone"
                    name="phone"
                    value={filters.phone}
                    onChange={handleFilterChange}
                />
            </div>
            <div className="overflow-x-auto h-dvh">
                <table
                    className="table relative w-full rounded-lg text-left font-normal text-sm leading-relaxed text-indent-0 border-collapse border-gray-300">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserManagementTable;