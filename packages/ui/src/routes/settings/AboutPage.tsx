import PopupLayout from "../../components/popup/PopupLayout"
import PopupHeader from "../../components/popup/PopupHeader"
import AppVersion from "../../components/AppVersion"

import { IoLogoTwitter } from "react-icons/io"
import { HiGlobeAlt } from "react-icons/hi"
import { FaTelegramPlane } from "react-icons/fa"
import { GrReddit } from "react-icons/gr"
import logo from "../../assets/images/logo.png"

const links = [
    {
        icon: <HiGlobeAlt className="w-5 h-5" />,
        link: "https://treschain.io",
        text: "treschain.io",
    },
    {
        icon: <FaTelegramPlane className="w-5 h-5" />,
        link: "https://t.me/treschain",
        text: "t.me/treschain",
    },
    {
        icon: <GrReddit className="w-5 h-5" />,
        link: "https://www.reddit.com/r/Treschain/",
        text: "reddit.com/treschain",
    },
    {
        icon: <IoLogoTwitter className="w-5 h-5" />,
        link: "https://twitter.com/treschain",
        text: "twitter.com/treschain",
    },
]
const AboutPage = () => {
    return (
        <PopupLayout header={<PopupHeader title={"About"} close="/" />}>
            <div className="space-y-6 p-6">
                <div className="rounded border border-gray-200 p-4">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="TresWallet logo"
                            className="w-5 h-5"
                        />
                        <span className="ml-2 text-lg font-bold">
                            TresWallet
                        </span>
                    </div>
                    <p className="mt-4">
                        TresWallet is the most private, non-custodial browser
                        extension wallet where users can store funds and
                        interact with their favorite blockchain applications
                        anonymously.
                    </p>
                    <p>Join us today and reclaim your privacy.</p>
                    <div className="mt-4">
                        <AppVersion />
                    </div>
                </div>
                <div className="rounded border border-gray-200 p-4">
                    <span className="text-lg font-bold">Contacts</span>
                    <div className="space-y-4 mt-4">
                        {links.map(({ text, link, icon }) => (
                            <a
                                href={link}
                                target="_blank"
                                className="text-base font-bold hover:underline flex items-center"
                                rel="noopener noreferrer"
                            >
                                {icon}
                                <span className="ml-2">{text}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </PopupLayout>
    )
}

export default AboutPage
