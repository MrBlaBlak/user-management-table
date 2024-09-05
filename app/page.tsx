import StoreProvider from "@/app/redux/StoreProvider";
import UserManagementTable from "@/app/components/UserManagementTable";

export default async function Home() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await data.json()
    return (
        <StoreProvider>
            <main >
                <UserManagementTable users={users}/>
            </main>
        </StoreProvider>
    );
}
