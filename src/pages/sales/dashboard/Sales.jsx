import React from "react";
import Header from "../../../components/header/Header";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsCreditCard } from "react-icons/bs";
import { PiChartPieSliceLight } from "react-icons/pi";

import "./Sales.scss";
import { Link } from "react-router-dom";

export const links = [
  {
    name: "dashboard",
    link: "./",
  },
  {
    name: "costumers",
    link: "costumer",
  },
  {
    name: "quotes",
    link: "quotes",
  },
  {
    name: "invoices",
    link: "invoices",
  },
  {
    name: "More",
    subname: [
      {
        name: "Invoices",
        link: "invoices",
      },
      {
        name: "Projects",
        link: "invoices",
      },
      {
        name: "Invoices",
        link: "invoices",
      },
      {
        name: "Sales",
        link: "invoices",
      },
    ],
  },
];
function Sales() {
  
  return (
    <div className="Sales w-100">
      <div className="container-fluid p-0 border">
        <div className="Sales__top">
          <Header data={links} />
        </div>
        <div className="Sales__content p-3 ">
          <div className="Sales__content__1 py-5 rounded">
            <div className="row">
              <div className="Sales__content__1__left col-lg-6 text-white">
                <h6 className=" text-uppercase">Oneup sales</h6>
                <h2 className="pt-2 fw-light">Master invoicing and payments</h2>
                <p className="py-4 fw-light">
                  OneUp SALES gives you total control of all your sales
                  activity, enabling you to track your sales information,
                  invoice more and get paid on time.
                </p>
                <Link to={'/customer_invoice'} className=" link px-3 py-2 rounded text-white text-uppercase">
                  Create Your first invoice
                </Link>
              </div>
              <div className="Sales__content__1__right col-lg-6">
                <img src="./img/img/home_lap_mob.png" alt="" />
              </div>
            </div>
          </div>
          <div className="Sales__content__2 bg-white ">
            <div className="row w-75 m-auto py-5">
              <div className="col-lg-4 d-flex text-center flex-column  align-items-center">
                <HiOutlineDevicePhoneMobile className="icon" />
                <strong>Make More Sales</strong>
                <small>
                  Track your quotes and sales orders and increase your sales.
                </small>
              </div>
              <div className="col-lg-4 d-flex text-center flex-column  align-items-center">
                <BsCreditCard className="icon" />
                <strong>Make More Sales</strong>
                <small>
                  Track your quotes and sales orders and increase your sales.
                </small>
              </div>
              <div className="col-lg-4 d-flex text-center flex-column  align-items-center">
                <PiChartPieSliceLight className="icon" />
                <strong>Make More Sales</strong>
                <small>
                  Track your quotes and sales orders and increase your sales.
                </small>
              </div>
            </div>
            <hr />
            <div className="pb-3 text-center">
                <p className="py-4">Create your first invoice and start using OneUp SALES now:</p>
              <Link to={'/customer_invoice'} className=" link px-3 py-2 rounded text-white text-uppercase">
                Create Your first invoice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
