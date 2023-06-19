import AmcLogo from '../../../assets/amc-logo.svg';

const Branding = () => {
    return (
        <div className="flex-1 flex justify-center items-center flex-col bg-[#006A80]">
            <div className="bg-slate-100 w-fit rounded-full">
                <img src={AmcLogo} alt="AMC Logo" className="h-72 w-72" loading="lazy" />
            </div>

            <div>
                <p className="text-gray-200 text-center my-6 font-semibold text-2xl">
                    AMDAVAD MUNICIPAL CORPORATION
                </p>
            </div>
        </div>
    );
};

export default Branding;
