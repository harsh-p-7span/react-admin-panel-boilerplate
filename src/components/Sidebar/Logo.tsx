import AmcLogo from '../../assets/amc-nav-logo.svg';

const Logo = ({ expandSideBar }: IProps) => {
    return (
        <div className="m-2">
            <div className="flex items-center divide-x-2 space-x-2 mt-1 w-full bg-white p-3 rounded">
                <div className="rounded-full">
                    <img src={AmcLogo} alt="AMC" className="w-32" loading="lazy" />
                </div>

                {expandSideBar ? (
                    <div className="text-gray-800 px-2 text-left text-sm font-bold break-words">
                        AMDAVAD MUNICIPAL CORPORATION
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Logo;

interface IProps {
    expandSideBar: boolean;
}
