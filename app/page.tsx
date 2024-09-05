import StoreProvider from "@/app/redux/StoreProvider";
import UserManagementTable from "@/app/components/UserManagementTable";
import React, {Suspense} from "react";
import FilterPanel from "@/app/components/FilterPanel";

export default function Home() {

    return (
        <StoreProvider>
            <main>
                <div className="overflow-x-auto h-dvh">
                    <FilterPanel/>
                    <div className="divider"></div>
                    <Suspense>
                        <UserManagementTable/>
                    </Suspense>
                </div>
            </main>
        </StoreProvider>
    );
}
