import React, { useState } from 'react'
import './Randomcom.css'

function Randomcom() {
    const [img, setImg] = useState('interrogacao.png')
    const array = ['aokiji.jpg', 'barbaBranca.jpg', 'barbaNegra.jpg', 'bigmom.jpg', 'bonClay.jpg', 'brook.jpg', 'chopper.jpg', 'franky.jpg', 'garp.jpg', 'jimbe.jpg', 'kid.jpg', 'koby.jpg', 'law.jpg', 'luffy.jpg', 'nami.jpg', 'rayleigh.jpg', 'robin.jpg', 'Roger.jpg', 'sanji.jpg', 'shanks.jpg', 'usoop.jpg', 'zoro.jpg'];
    function randomImagens() {

        const randomIndex = Math.floor(Math.random() * array.length);
        const randomNumber = './imagens/' + array[randomIndex];
        setImg(randomNumber)

    }
    return (
        <div className='container-randomcom'>
            <button className='botao' onClick={randomImagens}>Faça uma história com este Personagem</button>
            <img src={img} alt="" />
        </div>
    )
}

export default Randomcom