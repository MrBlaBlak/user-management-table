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
                    <Suspense fallback={<span className="loading loading-spinner loading-lg absolute top-2/4 left-2/4"></span>}>
                        <UserManagementTable/>
                    </Suspense>
                </div>
            </main>
        </StoreProvider>
    );
}
