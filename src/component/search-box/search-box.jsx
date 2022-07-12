import { React } from 'react'
import './search-box.css'


export default function SearchBox(props) {
    // const {className,placeHolder,onChangeHandler} = props
    return(
        <div>
            <input className={`search-box ${props.className}`} type='search' placeholder={props.placeHolder} onChange={props.onChangeHandler}/>
        </div>
    )
}