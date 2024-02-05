"use client"

import Hero from "../app/components/Hero/Hero";
import Mempelai from "../app/components/Content/Mempelai";
import {useState} from "react";
import Invited from "../app/components/Invited/Invited";
import Waktu from "../app/components/Content/Waktu";
import ProtokolKesehatan from "../app/components/Content/ProtokolKesehatan";
import Music from "../app/components/Content/Music";
import {useSpring, animated} from "react-spring";
import Wish from "../app/components/Content/Wish";
import Footer from "../app/components/Content/Footer";
import Head from "next/head";

export default function Home() {
    const [invited, setInvited] = useState(true)
    const [tamu, setTamu] = useState("")
    const changeInvited = (e) => {
        setInvited(e)
    }
    const nameGuest = (e) => {
        setTamu(e)
    }
    const fade = useSpring({
        opacity: invited ? 0 : 1,
        delay: 50
    })
    return (
        <div className="bg-gradient-to-br from-sky-100 to-red-100">
            {invited ?
                <Invited changeInvited={changeInvited} nameGuest={nameGuest}/> :
                <animated.div style={fade}>
                    <Music/>
                    <Hero guest={tamu}/>
                    <Mempelai/>
                    <Waktu/>
                    <ProtokolKesehatan/>
                    <Wish guest={tamu}/>
                    <Footer/>
                </animated.div>
            }
        </div>
    )
}
