import React from "react";
import Image from "next/image";
import Link from "next/link";

import metaversusLogo from "@/public/metaversus.svg";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={metaversusLogo}
        alt="Metaversus logo"
        className="w-28 md:w-[136px]"
      />
    </Link>
  );
};

export default Logo;
