'use client'
import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../redux/store';
import {setFilter, setUsers, User} from '../redux/userSlice';
import {useAppDispatch, useAppSelector} from "@/app/redux/hooks";


type Props = { users: User[] };
const UserManagementTable = ({users}: Props) => {
    const dispatch = useAppDispatch<AppDispatch>();
    const {filteredUsers, filters} = useAppSelector((state: RootState) => state.users)

    useEffect(() => {
        dispatch(setUsers(users));
    }, [dispatch]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        dispatch(setFilter({key: name, value}));
    };


    return (

        <div className="overflow-x-auto h-dvh">
            <div className="card bg-base-100 w-96 m-auto shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Filter data by:</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={filters.name}
                        onChange={handleFilterChange}
                        className="input w-full input-sm max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={filters.username}
                        onChange={handleFilterChange}
                        className="input w-full input-sm max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={filters.email}
                        onChange={handleFilterChange}
                        className="input w-full input-sm max-w-xs"
                    />
                    <input
                        type="number"
                        placeholder="Phone"
                        name="phone"
                        value={filters.phone}
                        onChange={handleFilterChange}
                        className="input w-full input-sm max-w-xs"
                    />
                </div>
            </div>
            <div className="divider"></div>
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
    );
};

export default UserManagementTable;