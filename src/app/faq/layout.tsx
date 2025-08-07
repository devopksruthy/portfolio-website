import { Metadata } from "next";
import React from "react";

export const metadata : Metadata = {
  title : 'sruthy/faq'
}

export default function FaqLayout ({children} : {children : React.ReactNode}) {
return (
    <div>
        {children}
    </div>
)
}