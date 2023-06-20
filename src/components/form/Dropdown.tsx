const Dropdown = ({ options, selected, handleChangeSelected }: IProps) => {
    return (
        <div className="w-full pr-3 bg-gray-100 text-gray-800 rounded cursor-pointer">
            <select
                id="countries"
                className="w-full p-3 outline-none bg-gray-100 text-gray-800 rounded cursor-pointer"
                value={selected}
                onChange={(e) => handleChangeSelected(e.target.value)}
            >
                {options.map((option) => {
                    return (
                        <option
                            key={option.value}
                            value={option.value}
                            // selected={selected === option.value}
                            // onClick={() => handleChangeSelected(option.value)}
                        >
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Dropdown;

interface IProps {
    options: {
        value: string;
        label: string;
    }[];
    selected: string;
    handleChangeSelected: (value: string) => void;
}
