import {useMemo, useState} from "react";
import {Users} from "../../dal/usersApi";

export  type HeaderType = "id"|"name"|"username"|"email"


export const useSortableData = (users: Array<Users>) => {


    const [sortConfig, setSortConfig] = useState<{key: HeaderType,direction: string } | null>(null);

    const sortedItems = useMemo(() => {
        let sortableItems = [...users];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [users, sortConfig]);

    const requestSort = (key:HeaderType) => {
        let direction = 'ascending';
        if (
            sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};
