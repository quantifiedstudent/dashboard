import React from "react";
import styles from "./Header.module.css";
import RouteItem from "./RouteItem";
import {MdHome} from "react-icons/md";
import {IoMdWatch} from "react-icons/io";
import CanvasIcon from "./CanvasIcon";
import {BsWifi} from "react-icons/bs";

const RouteItems = [
    {
        name: "Home",
        href: "/home",
        icon: <MdHome/>
    },
    {
        name: "Smartwatch",
        href: "/smartwatch",
        icon: <IoMdWatch/>
    },
    {
        name: "Canvas & FP",
        href: "/canvas",
        icon: <CanvasIcon/>
    },
    {
        name: "Wifi Attendance",
        href: "/wifi",
        icon: <BsWifi/>
    },
]
export default function Routes() {

    return <div className={styles.links}>
        {RouteItems.map((item, index) =>
            <RouteItem key={index} name={item.name} href={item.href} icon={item.icon}/>
        )}
    </div>
}
