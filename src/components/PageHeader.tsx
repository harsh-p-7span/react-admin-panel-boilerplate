const PageHeader = ({
    title,
    headerClass,
    extraElements
}: {
    title: string;
    headerClass?: string;
    extraElements?: JSX.Element | JSX.Element[];
}) => {
    return (
        <div className="app__header">
            <div
                className={`flex items-center py-2 px-4 shadow relative z-30 bg-white ${headerClass}`}
            >
                <p className="breadcrumbs flex items-center capitalize text-gray-500 space-x-2 text-sm p-1 font-medium">
                    {title}
                </p>

                {extraElements}
            </div>
        </div>
    );
};

export default PageHeader;
