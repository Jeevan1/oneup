import React, { useState } from "react";
import Header from "../../../components/header/Header";
import { links } from "../dashboard/Sales";
import { BsThreeDotsVertical, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiChevronDown,FiMenu } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

import "./Quotes.scss";
import SearchBar from "../../../components/SearchBar";
import StaticContent from "../../../components/ststicContent/StaticContent";

function Quotes() {
  return (
    <div className="Quotes w-100">
      <div className="container-fluid p-0 border">
        <div className="Quotes__top">
          <Header data={links} />
        </div>
        <div className="Quotes__content p-3 mt-5">
          <div className="Quotes__content__1 d-flex justify-content-between align-items-center">
            <h5 className="">Quotes</h5>
            <div className=" d-flex gap-2">
              <button className=" rounded px-3 py-2">New Quotes</button>
              <BsThreeDotsVertical className="icon p-1 rounded border" />
            </div>
          </div>
          <div className="Quotes__content__2 my-5">
            <StaticContent name={'Quotes'} desc={'A Quote is an offer to sell specific goods and services at a specific price. Once quotes are accepted they can be converted into Invoices or Sales Orders.'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
