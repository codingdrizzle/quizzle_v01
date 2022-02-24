import React from 'react'
import { createGlobalStyle } from 'styled-components'

const FooterStyles = createGlobalStyle`
    .app-footer{
        background: whitesmoke;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 5px 0;
    }
    .creator{ 
        margin: 0;
        margin-right: 30px;
    }
    .creator > a{
        font-weight: 800;
        color: rgb(0, 20, 40);
    }
    .copyright{
        margin: 0;
        margin-left: 30px;
    }

    @media only screen and (max-width: 570px){
        .app-footer{
            flex-direction: column;
        }
        .creator,.copyright{
            margin: 0;
        }
    }
`
export default function MyFooter(){
    return(
        <>
            <FooterStyles/>
            <div className='app-footer'>
                
                <h3 className='creator'>Created by <a href="https://www.linkedin.com/in/francis-buabin-owusu-a5874416a" target={'_blank'} rel={'noopener'}>@codingdrizzle</a></h3>
                <h3 className='copyright'>&copy; Copyright 2021 | All Rights Reserved</h3>
            </div>        
        </>

    )
}