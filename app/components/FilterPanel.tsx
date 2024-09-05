'use client'
import React from 'react';
import {setFilter} from "@/app/redux/userSlice";
import {useAppDispatch, useAppSelector} from "@/app/redux/hooks";
import {AppDispatch, RootState} from "@/app/redux/store";

type Props = {};
const FilterPanel = ({}: Props) => {
    const dispatch = useAppDispatch<AppDispatch>();
    const {filters} = useAppSelector((state: RootState) => state.users)
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        dispatch(setFilter({key: name, value}));
    };
    return (
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
    )
};
export default FilterPanel;