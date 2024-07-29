'use client';

import Image from "next/image";
import SideBar from "./components/SideBar/Sidebar";
import Switch from "./components/DarkModeButtom/Switch";

export default function Home() {
  return (
    <>
    <SideBar/>
    <Switch/>
    </>
  );
}
