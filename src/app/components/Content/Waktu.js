import Image from "next/image";
import MaskBottom from '../../assets/mask_bottom.png'
import Bunga from "../../assets/flower.png";
import Ring from '../../assets/ring.png'
import Wedding from '../../assets/wedding.png'
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";
import {useState} from "react";
import {useSpring, animated} from "react-spring";
import Instagram from "../../assets/instagram.png";

export default function Waktu() {
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState({
        Ngurah: false,
        Laras: false,
        alamat: false
    })
    const fade = useSpring({
        opacity: showModal ? 1 : 0,

    })
    const showInMapClicked = () => {
        window.open("https://www.google.com/maps/place/Gedung+Serbaguna+Graha+Cibening,+Jalan+Caman+Raya+No.+89,+Jatibening+II,+Pondok+Gede,+RT.006%2FRW.003,+Jatibening,+Kec.+Pondokgede,+Kota+Bks,+Jawa+Barat+17412/@-6.264685,106.94529,16z/data=!4m2!3m1!1s0x2e698d107ea38e83:0xb701d016f793eb9b?hl=id&gl=ID");
    };

    const copyText = (e) => {
        const rekeningNgurah = 1242725876
        const rekeningLaras = 7510870438
        const alamatRumah = "Jl. Caman Raya Gg. H. Moh. Ali (Belakang Kopi bob) No.1 RT 07/03, Jatibening."
        if (e === 'Ngurah') {
            navigator.clipboard.writeText(rekeningNgurah)
            setCopied({
                ...copied,
                Ngurah: true
            })
        } else if (e === "Laras") {
            navigator.clipboard.writeText(rekeningLaras)
            setCopied({
                ...copied,
                Laras: true
            })
        } else {
            navigator.clipboard.writeText(alamatRumah)
            setCopied({
                ...copied,
                alamat: true
            })
        }
    }
    return (
        <>
            <div className={"bg-color-white bg-cover bg-bottom"}>
                <Image src={MaskBottom}/>
                <div className={"flex justify-center items-center content-center md:-mt-10"}>
                    <Image src={Bunga}/>
                </div>
                <div className={"container flex flex-wrap justify-center mx-auto pt-5"}>
                    <br/>   
                    <div className={"md:w-1/12"}>
                    </div>
                    <div className="shadow-lg text-center text-black md:w-6/12 md:-ml-12 px-3 mb-6 py-10">
                        <Image src={Wedding} width={100} height={100}/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-serif"}>Resepsi</h1>
                        <p className={"font-bold"}>tangall</p>
                        <p className={"font-bold"}>jam</p>
                        <br/>
                        <p className={"font-bold"}>alamat</p>
                        <p className={"px-16"}>jalan</p>
                    </div>
                </div>
                <Timer/>
               
                <div className={"mx-auto justify-center flex"}>
                   <iframe width="820" height="560" id="gmap_canvas" src="https://maps.google.com/maps?q=bali&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <div className={"-mb-2"}>
                    <Image src={MaskTop}/>
                </div>
            </div>
        </>
    )
}
