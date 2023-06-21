const ActionButton = ({
    children,
    bgColor,
    textColor
}: {
    children: JSX.Element | JSX.Element[] | string;
    bgColor: string;
    textColor: string;
}) => {
    return (
        <button
            className={`flex justify-center items-center w-11 rounded-md h-11 select-none ${bgColor} ${textColor}`}
        >
            <span className="h-5 w-6 flex justify-center items-center">{children}</span>
        </button>
    );
};

export default ActionButton;
