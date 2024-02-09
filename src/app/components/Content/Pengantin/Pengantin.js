import Image from "next/image";
import Instagram from '../../../assets/instagram.png'
import pengantin from '../../../assets/5231019.png'
import mempelai from '../../../assets/man-person-icon.webp'

export default function Pengantin() {
    return (
        <>
            <div className={"container mx-auto hidden md:block"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <div className={"flex items-center justify-center"}>
                            <div className="rounded-full bg-auto h-[200px] w-[200px]">
                                <Image src={pengantin}/>
                            </div>
                        </div>
                        <h1 className={"md:text-5xl text-4xl font-medium text-black leading-relaxed mt-5 "}>- Laras -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-black leading-relaxed mt-5 font-serif"}>Nama Lengkap</h1>
                        <br/>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <div className={"flex items-center justify-center"}>
                            <div className="rounded-full bg-auto h-[200px] w-[200px]">
                                <Image src={mempelai}/>
                            </div>
                        </div>

                        <h1 className={"md:text-5xl text-4xl font-medium text-black leading-relaxed mt-5"}>- Ngurah -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-black leading-relaxed mt-5 font-serif"}>NNama Lengkap</h1>
                        <br/>
                    </div>


                </div>
            </div>
            {/*Mobile*/}
            <div className={"container mx-auto md:hidden"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-black leading-relaxed mt-5 "}>-
                            Laras
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-black leading-relaxed font-serif"}>Nama Lengkap</h1>
                        <br/>

                    </div>
                    <div className={"flex items-center w-full justify-center"}>
                      
                        <div className="rounded-full mr-10 w-[150px] h-[150px]">
                                <Image src={pengantin}/>
                            </div>
                            <div className="rounded-full mr-10 w-[150px] h-[150px]">
                                <Image src={mempelai}/>
                            </div>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-black leading-relaxed mt-5"}>-
                            Ngurah
                            -</h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-black leading-relaxed font-serif"}>Nama Lengkap</h1>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    )
}
