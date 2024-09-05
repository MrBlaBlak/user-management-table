import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

interface UsersState {
    users: User[];
    filteredUsers: User[];
    filters: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
}

const initialState: UsersState = {
    users: [],
    filteredUsers: [],
    filters: {
        name: '',
        username: '',
        email: '',
        phone: '',
    },
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<{ key: string; value: string }>) => {
            // Update the specific filter value
            state.filters[action.payload.key as keyof UsersState['filters']] = action.payload.value;

            // Perform filtering only if the value exists, otherwise return the full list
            state.filteredUsers = state.users.filter((user) =>
                Object.keys(state.filters).every((key) => {
                    const filterValue = state.filters[key as keyof UsersState['filters']].toLowerCase();
                    let userValue = user[key as keyof User]?.toString().toLowerCase();
                    if (key === 'phone') {
                        // Remove all non-numeric characters from the phone number
                        userValue = userValue.replace(/\D/g, '');
                    }
                    // Only apply the filter if there is some value to filter by
                    if (filterValue) {
                        return userValue.startsWith(filterValue);
                    }
                    return true; // If no filter value is set, include the user in the results
                })
            );
        },
        setUsers: (state, action)=>{
            state.users = action.payload;
            state.filteredUsers = action.payload;
        }
    },
});
export const { setFilter, setUsers } = userSlice.actions;
export default userSlice.reducer;