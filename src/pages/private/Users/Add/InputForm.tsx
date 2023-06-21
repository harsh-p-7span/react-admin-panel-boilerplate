import { FormEvent, useState } from 'react';
import UploadImage from '../../../../assets/uploadImg.svg';
import FormLabel from '../../../../components/form/FormLabel';
import Select from '../../../../components/form/Select';
import SelectItem from '../../../../components/form/Select/SelectItem';

const InputForm = () => {
    const [selected, setSelected] = useState(people[0]);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('FORM SUBMITTED');
    };

    return (
        <div className="p-6">
            <form className="pb-3 w-96" onSubmit={handleFormSubmit}>
                <div>
                    <FormLabel htmlFor="profilePictureComponent">Profile Picture</FormLabel>

                    <div className="mt-2" id="profilePictureComponent">
                        <label htmlFor="profilePicture">
                            <img
                                src={UploadImage}
                                alt="Upload Image"
                                className="h-24 w-24 cursor-pointer"
                                loading="lazy"
                            />
                        </label>

                        <input
                            type="file"
                            name="profilePicture"
                            id="profilePicture"
                            className="hidden"
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-3">
                    <FormLabel htmlFor="firstName">First Name *</FormLabel>

                    <div className="bg-gray-100 h-11 w-full px-3 rounded-md mt-2 mb-1">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="bg-gray-100 h-full w-full outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-3">
                    <FormLabel htmlFor="middleName">Middle Name</FormLabel>

                    <div className="bg-gray-100 h-11 w-full px-3 rounded-md mt-2 mb-1">
                        <input
                            type="text"
                            name="middleName"
                            id="middleName"
                            className="bg-gray-100 h-full w-full outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-3">
                    <FormLabel htmlFor="lastName">Last Name *</FormLabel>

                    <div className="bg-gray-100 h-11 w-full px-3 rounded-md mt-2 mb-1">
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="bg-gray-100 h-full w-full outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-3">
                    <FormLabel htmlFor="lastName">Last Name *</FormLabel>

                    <div className="bg-gray-100 w-full px-3 py-2 rounded-md mt-2 mb-1">
                        <textarea
                            rows={5}
                            name="lastName"
                            id="lastName"
                            className="bg-gray-100 w-full outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-3">
                    <FormLabel htmlFor="userType">User type *</FormLabel>

                    <Select
                        selected={selected}
                        setSelected={setSelected}
                        selectedLabel={selected.name}
                    >
                        {people.map((person, personIdx) => (
                            <SelectItem key={personIdx} value={person} label={person.name} />
                        ))}
                    </Select>
                </div>

                <div className="flex gap-5 mt-6">
                    <button className="p-2 rounded-md text-white bg-gray-500 w-24">Cancel</button>

                    <button className="p-2 rounded-md text-white bg-red-600 w-24" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InputForm;

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false }
];
