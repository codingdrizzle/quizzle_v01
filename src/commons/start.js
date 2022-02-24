import React, {useState} from 'react'
import { Button } from 'antd'
import {createGlobalStyle} from 'styled-components'

const StartStyles = createGlobalStyle`
    .landing{
        width: 100%;
        height: 100vh;
        background: rgb(0, 20, 40);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .start{
        color: #fff;
        background: rgb(0, 20, 40);
        font-size: 25px;
        padding: 15px 30px;
        height: 70px;
        max-height: 100px;
        font-weight: 700px;
        outline: none;
        border: 1px solid #fff;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.8s ease;
        overflow: hidden !important;
    }
    .start:hover{
        color: rgb(0, 20, 40);
        background: #fff;
        border: none
    }
`
export default function Start(props){
    const { load, letsGo } = props
    const [loading, setLoading] = useState(load)
    const [text, setText] = useState('START')

    const Loaded = () => {
        setText('Please wait...')
        setLoading(!loading)
        letsGo()
    }
    return(
        <>
            <StartStyles/>
            <div className='landing'>
                <Button loading={loading} onClick={Loaded} className='start' size='large'>&nbsp; {text}</Button>
            </div>
        </>
    );
}