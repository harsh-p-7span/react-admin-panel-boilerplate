const Table = ({
    header,
    body
}: {
    header: JSX.Element | JSX.Element[];
    body: JSX.Element | JSX.Element[];
}) => {
    return (
        <table className="v-list-table table text-left w-full h-full table-admin p-2 lg:p-4 font-body bg-white text-gray-900">
            <thead>
                <tr className="border-b border-b-[#D1D5DB]">{header}</tr>
            </thead>

            <tbody>{body}</tbody>
        </table>
    );
};

export default Table;
