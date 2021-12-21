import React, { useState } from 'react'


const Card = ({pokemon}) => {
    const [width, setWidth] = useState("190px")
    const [height, setHeight] = useState("200px")
    const [top, setTop] = useState("0")
    const [left, setLeft] = useState("0")

    const handleImgBig=(e)=>{
        e.preventDefault()
        setWidth("390px");
        setHeight("440px");
        setTop("-200px")
        setLeft("-40px")
    }
    const handleImgSmall=(e)=>{
        e.preventDefault()
        setWidth("190px");
        setHeight("200px");
        setTop("0")
        setLeft("0")
    }
    return (
        <div onMouseLeave={(e)=>handleImgSmall(e)} onMouseEnter={(e)=>handleImgBig(e)} className='card'>
            {
                pokemon.Type[0].name==="Fire"?
                <div className='bgFire'>
                    <img style={{width:width,height:height,transition:"0.5s",zIndex:"10",top:top,left:left}} className='pokemon' src={pokemon.pic} alt="" />
                </div>:pokemon.Type[0].name==="Water"?
                <div className='bgWater'>
                    <img style={{width:width,height:height,transition:"0.5s",zIndex:"10",top:top,left:left}} className='pokemon' src={pokemon.pic} alt="" />
                </div>:
                <div className='bgGrass'>
                    <img style={{width:width,height:height,transition:"0.5s",zIndex:"10",top:top,left:left}} className='pokemon' src={pokemon.pic} alt="" />
                </div>
            }
            <div>
                <span className='name'>{pokemon.name}</span>
            </div>
            <div>
                <div className='types'>
                    {
                        pokemon.Type.map((type)=>(
                            <div className='type'>
                                <img src={type.url} alt="" />
                                <span>{type.name}Type</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
