'use client';

import Form from 'next/form';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import SearchIcon from '../Icons/SearchIcon';

export default function InputSearch() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    function handleSearch(formData) {
        const params = new URLSearchParams(searchParams);
        const search = formData.get('search');
        params.delete('page');
        if (search) {
            params.set('search', search);
        } else {
            params.delete('search');
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <Form action={handleSearch} className="w-full">
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <SearchIcon />
                <input
                    key={searchParams?.get('search')}
                    defaultValue={searchParams.get('search')?.toString()}
                    name="search"
                    type="search"
                    className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                />
            </div>
        </Form>
    );
}
