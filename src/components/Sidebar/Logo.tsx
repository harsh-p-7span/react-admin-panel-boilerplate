import SevenSpanLogo from '../../assets/icon.svg';

const Logo = ({ expandSideBar }: IProps) => {
    return (
        <div className="m-2">
            <div className="flex items-center divide-x-2 space-x-2 mt-1 w-full bg-white p-3 rounded">
                <div className="rounded-full">
                    <img src={SevenSpanLogo} alt="7Span" className="w-32" loading="lazy" />
                </div>

                {expandSideBar ? (
                    <div className="text-gray-800 pr-2 pl-5 text-left text-4xl font-bold break-words">
                        7Span
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
