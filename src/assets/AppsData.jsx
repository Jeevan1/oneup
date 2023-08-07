import { TfiHome } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";
import {
  PiFileCloudLight,
  PiNotepad,
  PiCalculator,
  PiChartPieSlice,
} from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";

export const menuItems = [
  {
    id: 1,
    name: "Home",
    icon: <TfiHome />,
    color: "#5390F4",
    desc: `Track leads and opportunities and close more sales. Turn "won" opportunities into personalised quotes and email them to your new customers.`,
    active : false,
},
  {
    id: 2,
    name: "login",
    icon: <TiMessages />,
    color: "#6AD83C",
    desc: `Track leads and opportunities and close more sales. Turn "won" opportunities into personalised quotes and email them to your new customers.`,
    active : true
},
  {
    id: 3,
    name: "Sales",
    icon: <PiFileCloudLight />,
    color: "#01BCAE",
    desc: "Create beautiful customised invoices and email them to your customers to get paid fast. Get email notifications for any past-due invoice.",
    active : true
},

  {
    id: 4,
    name: "Purchasing",
    icon: <PiNotepad />,
    color: "#27C2FF",
    desc: `Organise your tasks to increase productivity and profit. If used with sales feature, you can use “Bill Time” to bill your projects effortlessly.`,
    active : true
},
  {
    id: 5,
    name: "Inventory",
    icon: <BsBoxSeam />,
    color: "#FFBB44",
    desc: `Enter expenses and document them by uploading receipts. Be ready to justify any company expense at tax time.`,
    active : true
},
  {
    id: 6,
    name: "Accounting",
    icon: <PiChartPieSlice />,
    color: "#8150E4",
    desc: `Prepare and ship customer orders on time, easily re-order products and keep tight control over your inventory levels.`,
    active : true
},
  {
    id: 7,
    name: "Reports",
    icon: <TbReportSearch />,
    color: "#FE586C",
    desc: `Connect OneUp to your bank to download expenses and reconcile your accounts in zero time. Worry-free accounting automatically entered while you work.`,
    active : false
},
  {
    id: 8,
    name: "Apps",
    icon: <PiCalculator />,
    color: "#5390F4",
    desc: `Enter expenses and document them by uploading receipts. Be ready to justify any company expense at tax time.`,
    active : true
},
];
