import Image from "next/image";
import finance from "/public/images/icon-finance.png";
import chart from "/public/images/icon-chart.png";
import check from "/public/images/icon-check.png";
import photo from "/public/images/icon-photo.png";
import key from "/public/images/icon-key.png";
import setting from "/public/images/icon-setting.png";
import error from "/public/images/icon-error.png";

const BannerCategory = () => {
    return (
        <div className="mt-5 flex justify-center items-center gap-2">
            <div className="flex flex-col gap-2 items-center rounded-lg hover:shadow-lg hover:bg-white p-5">
                <Image className="rounded-lg" src={finance} width={50} height={50} alt="Finance" />
                <h3 className="text-xs font-medium uppercase">Finance</h3>
            </div>
            <div className="flex flex-col gap-2 items-center rounded-lg hover:shadow-lg hover:bg-white p-5">
                <Image className="rounded-lg" src={chart} width={50} height={50} alt="Statistics" />
                <h3 className="text-xs font-medium uppercase">Statistics</h3>
            </div>
            <div className="flex flex-col gap-2 items-center rounded-lg hover:shadow-lg hover:bg-white p-5">
                <Image
                    className="rounded-lg"
                    src={photo}
                    width={50}
                    height={50}
                    alt="Photography"
                />
                <h3 className="text-xs font-medium uppercase">Photography</h3>
            </div>
            <div className="flex flex-col gap-2 items-center rounded-lg hover:shadow-lg hover:bg-white p-5">
                <Image className="rounded-lg" src={check} width={50} height={50} alt="Management" />
                <h3 className="text-xs font-medium uppercase">Management</h3>
            </div>
            <div className="flex flex-col gap-2 items-center rounded-lg hover:shadow-lg hover:bg-white p-5">
                <Image className="rounded-lg" src={setting} width={50} height={50} alt="Setting" />
                <h3 className="text-xs font-medium uppercase">Settings</h3>
            </div>
            <div className="flex flex-col gap-2 items-center rounded-lg hover:shadow-lg hover:bg-white p-5">
                <Image
                    className="rounded-lg"
                    src={error}
                    width={50}
                    height={50}
                    alt="Programming"
                />
                <h3 className="text-xs font-medium uppercase">Programming</h3>
            </div>
            <div className="flex flex-col gap-2 items-center rounded-lg hover:shadow-lg hover:bg-white p-5">
                <Image className="rounded-lg" src={key} width={50} height={50} alt="Business" />
                <h3 className="text-xs font-medium uppercase">Business</h3>
            </div>
        </div>
    );
};

export default BannerCategory;
