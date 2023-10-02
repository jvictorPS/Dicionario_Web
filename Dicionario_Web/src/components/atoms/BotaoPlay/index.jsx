/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { useRef } from "react"

import { ContainerPlay } from "./style"

import iconerPlay from '../../../assets/iconePlay.png'

export default function BotaoPay({AudioURL}) {
    
    const audioRef = useRef(null)

    const lidarComAudio = () => {
        audioRef.current.play()
    }

    return (
        <ContainerPlay onClick={lidarComAudio}>
            <img src={iconerPlay} alt="icone de play"/>
            <audio ref={audioRef} src={AudioURL}></audio>
        </ContainerPlay>
    )
}