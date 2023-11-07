
import { instaSVG, telegramSVG, discordSVG, chainCSG } from "./logoSVG";
export default function NetworkButton({ name, hrefURL }) {

    let content;

    switch (name) {
        case 'telegram':
            content = telegramSVG;
            break;
        case 'discord':
            content = discordSVG;
            break;
        case 'instagram':
            content = instaSVG;
            break;
        default:
            content = chainCSG;
            break;
    }


    return (
        <div className="flex flex-row items-center gap-[20%] shrink-0 w-[30%]">
            {content}
            <a className=" bg-[#000] py-[3%] px-[10%]" href={hrefURL}>
                <button className=" text-white ">ПРИЄДНАТИСЬ</button>
            </a>
        </div>
    )
}