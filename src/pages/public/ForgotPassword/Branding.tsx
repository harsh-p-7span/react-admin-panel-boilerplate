import AmcLogo from '../../../assets/icon.svg';

const Branding = () => {
    return (
        <div className="flex-1 flex justify-center items-center flex-col bg-[#006A80]">
            <div className="w-fit rounded-full">
                <img src={AmcLogo} alt="7Span Logo" className="h-72 w-72" loading="lazy" />
            </div>

            <div>
                <p className="text-gray-200 text-center my-6 font-semibold text-7xl">7Span</p>
            </div>
        </div>
    );
};

export default Branding;
