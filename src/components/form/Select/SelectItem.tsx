import { Listbox } from '@headlessui/react';

const SelectItem = ({ value, label }: { value: any; label: string }) => {
    return (
        <Listbox.Option
            className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
            }
            value={value}
        >
            {({ selected }) => (
                <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {label}
                    </span>
                    {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                            >
                                <path
                                    fill="currentColor"
                                    d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"
                                ></path>
                            </svg>
                        </span>
                    ) : null}
                </>
            )}
        </Listbox.Option>
    );
};

export default SelectItem;
