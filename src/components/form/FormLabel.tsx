const FormLabel = ({ children, htmlFor }: { children: string; htmlFor: string }) => {
    return (
        <label htmlFor={htmlFor} className="text-sm text-gray-500">
            {children}
        </label>
    );
};

export default FormLabel;
