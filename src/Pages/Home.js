import React from "react";
import Curosel from "../component/Curosel";
import Isfeatured from "../component/Isfeatured";
import Video from "../component/Video";
import Experiance from "../component/Experiance";
import Bestdeal from "../component/Bestdeal";
import Properties from "../component/Properties";
import Contactus from "../component/Contactus";

export default function Home() {
  return (
    <>
      <Curosel />
      <Isfeatured />
      <Video />
      <Experiance />
      <Bestdeal />
      <Properties />
      <Contactus />
    </>
  );
}
