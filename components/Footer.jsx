import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Designed and Developed by Jude Adenuga for Batanaija.com. All rights reserved</p>
      <p className='icons'>
        <a href='http://judeadenuga.com/' target="_blank">
        <AiFillInstagram/>
        </a>
        <a  href='https://www.instagram.com/the_lord_of_ibadan/' target="_blank">
        <AiOutlineTwitter/>
        </a>
      </p>

    </div>
  )
}

export default Footer