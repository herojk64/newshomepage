import React from 'react'
import Data from '../json/data.json'
import gaming from '../images/image-gaming-growth.jpg'
import retro from '../images/image-retro-pcs.jpg'
import top from '../images/image-top-laptops.jpg' 
import './Card.css'

const Cards = ():React.ReactElement => {
    const [loading,setLoading] = React.useState(false);
    React.useLayoutEffect(
        ()=>{
            let x = [gaming,retro,top];
            x.forEach((e,index)=>Data[index].images = e);
            setLoading(true);
        },
        []
    )
  return (
    <section className='news-card-wrapper'>
        {loading?
        Data?.map((e)=>{
            return (
                <div className='news-card mt1' key={e._id}>
                <img src={e.images} alt="products"/>
                <span className='news-card-details'>
                    <span>{e._id}</span>
                    <header>{e.name}</header>
                    <p>{e.description}</p>
                </span>
                </div>
            )
        })
    :null
    }
    </section>
  )
}

export default Cards