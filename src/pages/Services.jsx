import React from 'react';
import { TbWorld } from "react-icons/tb";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdPeople } from "react-icons/md";
const Services = () => {
    return (
        <div className='flex md:flex-row flex-col gap-4 text-center bg-[#333333] text-white p-6'>
            <div className='flex flex-col items-center gap-4'>
                    <TbWorld className='text-5xl'></TbWorld>
                    <h1 className='text-3xl font-bold'>Global Selection </h1>
                    <p>Explore an unparalleled selection of paintings,photography,sculpture,and more by thousands of artists from around the world</p>
                
            </div>
            <div className='flex flex-col items-center gap-4'>
            <HiOutlineEmojiHappy className='text-5xl'></HiOutlineEmojiHappy>
                    <h1 className='text-3xl font-bold'>Satisfaction Guaranteed</h1>
                    <p>Our 14-day satisfaction guarantee allows you to buy with confidence. If you are not satisfied with your purchase, return it and we will help you find a work you love.</p>
                
            </div>
            <div className='flex flex-col items-center gap-4'>
                <MdPeople className='text-5xl'></MdPeople>
                    <h1 className='text-3xl font-bold'>Complimentary Art </h1>
                    <p>Our personalized art advisory service gives you access to your own expert curator, free of charge.</p>
                
            </div>
        </div>
    );
};

export default Services;