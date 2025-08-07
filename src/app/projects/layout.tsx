import { Metadata } from "next";
import React from "react";

export const metadata : Metadata = {
  title : 'sruthy/projects'
}

export default function ProjectsLayout ({children} : {children : React.ReactNode}) {
return (
    <div>
        {children}
    </div>
)
}