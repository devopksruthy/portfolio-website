import { Metadata } from "next";
import React from "react";

export const metadata : Metadata = {
  title : 'sruthy/about-us'
}

export default function AboutUsLayout ({children} : {children : React.ReactNode}) {
    return (
        <div>
        {children}
        </div>
    );
}