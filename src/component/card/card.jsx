import { React } from 'react'
import './card.css'



export default function Card(props) {
    // const {name,email,id} = props.monster
    return(
        <div  className='card-container'>
            <img alt={`monster ${props.monster.name}`} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h1>{props.monster.name}</h1>
            <h3>{props.monster.email}</h3>
        </div>
    )
}