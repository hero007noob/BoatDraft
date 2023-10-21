import React from "react";
import logo from "../assets/logo.svg";
import { FaBeer } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import { PiCaretDownBold } from "react-icons/pi";
import { BsHandbag, BsSearch } from "react-icons/bs";
import accountPic from "../assets/account.webp";
import handbag from "../assets/handbag.png";
export default function Nav() {
  return (
    <div className="flex bg-red-400 justify-center " style={{}}>
      <div className="w-4/5 flex bg-green-500 items-center">
        <div className="w-1/5">
          <img src={logo} alt="" className="w-1/3" />
        </div>
        <div className=" w-full flex justify-between">
          <ul className="flex items-center">
            <li className="mr-2 flex items-center">
              Category
              <PiCaretDownBold />
            </li>
            <li className="mr-2">Daily Deals </li>
            <li className="mr-2">Gift With boAt </li>
            <li className="mr-2">Corporate Orders </li>
            <li className="mr-2 flex items-center">
              More <PiCaretDownBold />
            </li>
          </ul>
          <div className="flex items-center">
            <div>search</div>
            <img src={accountPic} alt="" className="w-7 mr-3" />
            <img src={handbag} alt="" className="w-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
