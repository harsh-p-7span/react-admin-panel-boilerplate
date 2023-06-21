import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Select = ({
    children,
    selected,
    setSelected,
    selectedLabel
}: {
    children: JSX.Element | JSX.Element[];
    selected: any;
    setSelected: any;
    selectedLabel: string;
}) => {
    return (
        <Listbox value={selected} onChange={setSelected} name="userType">
            <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-100 py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selectedLabel}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-gray-400"
                        >
                            <path
                                fill="currentColor"
                                d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
                            ></path>
                        </svg>
                    </span>
                </Listbox.Button>

                <Transition
                    as={Fragment}
                    // leave="transition ease-in duration-100"
                    // leaveFrom="opacity-100"
                    // leaveTo="opacity-0"
                    enter="transition ease-in duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {children}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
};

export default Select;
