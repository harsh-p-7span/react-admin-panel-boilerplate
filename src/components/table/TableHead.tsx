const TableHead = ({
    children,
    rowSpan = 1,
    colSpan = 1
}: {
    children: JSX.Element | JSX.Element[] | string;
    rowSpan?: number;
    colSpan?: number;
}) => {
    return (
        <th
            rowSpan={rowSpan}
            colSpan={colSpan}
            className="text-xs lg:text-sm leading-4 lg:leading-5 font-medium text-[#6B7280] py-3 px-4"
        >
            <div>
                <span>{children}</span>
            </div>
        </th>
    );
};

export default TableHead;
