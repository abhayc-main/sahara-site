import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="pt-40 container" id="footer">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="leading-[1.8]">
            <p>(425) 522-4718</p>
          </p>
        </div>

        <div>
          <p>Hours</p>
          <p> Sunday - Thursday 11 AM - 9 PM</p>
          <p> Friday 11 AM - 10 PM</p>
          <p> Saturday 11 AM - 10 PM</p>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <button>
              <a href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
            </button>
            <button>
              <a href="https://twitter.com/">
                <BsTwitter />
              </a>
            </button>
            <button>
              <a href="https://www.instagram.com/sahara_redmond/">
                <FaInstagram />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright 2023 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
