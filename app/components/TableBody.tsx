'use client'
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@/app/redux/hooks";
import {AppDispatch, RootState} from "@/app/redux/store";
import {setUsers, User} from "@/app/redux/userSlice";

type Props = { users: User[] };
const TableBody = ({users}: Props) => {
    const dispatch = useAppDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(setUsers(users))
    }, [])
    const {filteredUsers} = useAppSelector((state: RootState) => state.users)
    return (
        <>
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
        </>
    );
};
export default TableBody;