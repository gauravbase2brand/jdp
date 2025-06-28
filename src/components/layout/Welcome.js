"use client";
import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import logo from "../../../public/images/logo.svg";
import mainimage from "../../../public/images/mainimage.svg";
import Modal from '../ui/Modal';
// Importing the main image for the background

const Welcome = ({ welcome ,StartingTxt}) => {
  const alertbox = () => {
    alert("Terms of service clicked");
  };
  return (
  <div style={{ backgroundImage: `url(${mainimage.src})` }} className="bg-cover bg-center h-screen w-full relative" >
      <div  className="flex h-screen w-full items-center justify-center bg-cover bg-center p-8">
      <div className="w-xl ">
        <h1 className="text-2xl font-bold mb-4 text-white">{welcome}</h1>
        <p className="mb-6 text-sm leading-relaxed text-white">
         {StartingTxt}
        </p>
       <Button uibutton="Terms of service"  ButtonUi="rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600"  onClick={alertbox}/>
        <div className="mt-auto pt-12 opacity-10 text-4xl font-black tracking-wider">
          JDP
        </div>
      
      </div>
        
    <Image src={logo} alt="JDP Logo" className="mt-4 w-24 h-24 absolute right-[150px] bottom-[60px]" />

    </div>
  </div>
  );
};

export default Welcome;
