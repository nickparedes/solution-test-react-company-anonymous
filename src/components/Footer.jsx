import React from 'react'
import styled from 'styled-components';
import { colors} from '../themes/pageColors';

import {FaFacebookF} from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ReactSVG } from 'react-svg';
import FacebookWhite from '../assets/social/facebook-white.svg';
import InstagramWhite from "../assets/social/instagram-white.svg"
import TwitterWhite from "../assets/social/twitter-white.svg";

import AppStore from "../assets/store/app-store.svg"
import PlayStore from "../assets/store/play-store.svg"
import WindowsStore from "../assets/store/windows-store.svg"
import { Link } from 'react-router-dom';



const Container  = styled.div`
    background: ${colors.footer};
    display: flex;
    justify-content: center;
    width: 100%;
    
    .general{
        width: 70%;
        
    }

    a, p {
        color: white;

    }

    p{
        margin: 0;
    }

    .seccion-1{
        flex-wrap: wrap;
        margin-top: 2rem;
        margin-bottom: 0.5 rem;
        display: flex;
        gap: 1rem;
    }

    .seccion-3{
        display: flex;
        justify-content: space-between;
        margin: 4rem 0; 
        flex-wrap: wrap;
        .social-medias{
            display: flex;
            gap: 1rem;
            
            svg {
                width: 40px;
                height:40px;
            }
            
        }
    
        .distro{
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            
            svg {
                width : 135px;
                height: 40px;     
            }
        }

        @media (max-width: 768px) {
            

            .social-medias,.distro{
                display: flex;
                flex-direction: column;
            }
        }
    }

   
`   


const Footer = () => {
  return (
    <Container>
        <div className='general'>
            <div className='seccion-1'>
                <a>Home</a>
                <p>|</p>
                <a>Terms and Conditions</a>
                <p>|</p>
                <a>Privacy Policy</a>
                <p>|</p>
                <a>Collection Statement</a>
                <p>|</p>
                <a>Help</a>
                <p>|</p>
                <a>Manage Account</a>
            </div>
            <div>
                <p style={{opacity: "0.7"}}>Copyright ©2016 DEMO Streaming. All Rights Reserverd</p>
            </div>
            <div className='seccion-3'>
                <div className='social-medias'>
                    
                    <Link to="https://web.facebook.com/" target='blank'> <ReactSVG src={FacebookWhite} /></Link>
                    <Link to="https://www.instagram.com/" target='blank'> <ReactSVG src={InstagramWhite} /></Link>
                    <Link to="https://twitter.com/midudev/status/1568233354285268994?lang=es" target='blank'><ReactSVG src={TwitterWhite} /></Link>
                </div>
                <div className='distro'>
                    <Link to="/descargando"><ReactSVG src={AppStore}/></Link>
                    <Link to="/descargando"><ReactSVG src={PlayStore}/></Link>
                    <Link to="/descargando"><ReactSVG src={WindowsStore}/></Link>
                </div>
            </div>
        </div>
    </Container>
  )
}



export default Footer;