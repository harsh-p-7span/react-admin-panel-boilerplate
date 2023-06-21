const TableData = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => {
    return (
        <td className="text-xs lg:text-sm leading-4 lg:leading-5 font-normal py-3 px-4 lg:px-3">
            {children}
        </td>
    );
};

export default TableData;
