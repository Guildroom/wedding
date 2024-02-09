import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import Instagram from '../../assets/instagram.png'

export default function Footer({}) {
    return (
        <>
            <div className={"bg-footer bg-cover bg-no-repeat bg-center "}>
                <Image src={MaskBottom}/>
                <div className={"container mx-auto pt-5 pb-20"}>
                    <div className={"flex justify-center items-center content-center"}>
                        <p className={"text-center block md:mb-0 font-medium text-black leading-relaxed"}>With Love,</p>
                    </div>
                    <div className={"flex justify-center items-center"}>
                        <h1 className={"md:text-6xl text-center  text-5xl mb-0 font-medium text-black leading-relaxed font-serif"}>&nbsp;Ngurah Oka XXX &nbsp;</h1>
                    </div>
                    <div className={"flex justify-center items-center content-center "}>
                        <h1 className={"md:text-6xl text-center text-5xl mb-0 font-medium text-black leading-relaxed font-serif"}>
                            & </h1>
                    </div>
                    <div className={"flex justify-center items-center content-center "}>
                        <h1 className={"md:text-6xl text-center  text-5xl mb-5 font-medium text-black leading-relaxed font-serif"}>&nbsp;Gusti Kadek Natia Larasati&nbsp; </h1>
                    </div>
                    <div className={"flex justify-center items-center content-center "}>
                        <a href="" target="_blank" className={"mr-3 flex"} rel="noreferrer">
                            <Image src={Instagram} width={25} height={25}/>
                            <p className={"text-black"}>&nbsp;@abc </p>
                        </a>
                        <a href="" target={"_blank"} className={"flex"} rel="noreferrer">
                            <Image src={Instagram} width={25} height={25}/>
                            <p className={"text-black"}>&nbsp;@abc </p>
                        </a>
                    </div>
                    <br/>
                </div>
            </div>
        </>
    )
}