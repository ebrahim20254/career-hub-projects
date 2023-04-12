import React from 'react';
import Header from '../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import icons from './Group 9969.png'

const Footer = () => {
    return (
      <footer className="rounded-xl mt-20 py-10 bg-indigo-950 text-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 text-center gap-16 py-16 px-10">
          <div className="">
            <div>
              <p className="text-2xl font-bold">Dream Job</p>
              <p className="mt-5">
                Its a complete guidance of Your dream Job Here. Do you have
                skills? But don't have any certificate. Don't worry we are here
                for you. We will test you in various ways that you are capable
                of your journey
              </p>
              <img className="mt-5" src={icons} alt="" />
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold text-rose-400">Company</p>
            <div className="flex flex-col gap-3 mt-5">
              <Link>About us</Link>
              <Link>Work</Link>
              <Link>Latest News</Link>
              <Link>Careers</Link>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold text-rose-400">Product</p>
            <div className="flex flex-col gap-3 mt-5">
              <Link>product</Link>
              <Link>Plans & pricing</Link>
              <Link>LatCustomers</Link>
              <Link>integrations</Link>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold text-rose-400">Support</p>
            <div className="flex flex-col gap-3 mt-5">
              <Link>Help Desk</Link>
              <Link>Series</Link>
              <Link>Become Partner</Link>
              <Link>Developers</Link>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold text-rose-400">Contact</p>
            <div className="flex flex-col gap-3 mt-5">
              <p>524 Broadway ,NYC</p>
              <p>+1777-9843-234</p>
            </div>
          </div>
        </div>
        <hr className="w-11/12 mx-auto" />
        <div className="mt-10 pb-10">
          <div className="flex gap-5 flex-col lg:flex-row content-center items-center justify-around">
            <p>@2023 CareerHub. All Rights Reserved</p>
            <p>Powered by Dream Job</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;