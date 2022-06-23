import Image from 'next/image'
import React from 'react'
import { BlogStyled } from '../styles/index.styles'
import Background1 from '../assets/images/blog2.webp';
import Link from 'next/link';
type Props = {
    title: string;
    link: string;
    background: string;
    w: number;
    h:number;
}

export default function Blog({title, link, background, w, h}: Props) {
  return (
    <BlogStyled className='hover:-translate-y-6 transition duration-0 hover:duration-700 ease-in-out'>
        <Link  href={link}>
            <a>
            <Image width={w} height={h} className='hover:cursor-pointer rounded-lg' src={background} alt="Blog Background" />
            <p>{title}</p>
            </a>
        </Link>
    </BlogStyled>
  )
}