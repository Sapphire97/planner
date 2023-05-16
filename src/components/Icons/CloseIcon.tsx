import React from "react";

const CloseIcon = ({ color }: IconProps) => (
    <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>close</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="close" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M6.31994158,5 L10,8.68005842 L8.68005842,10 L5,6.31994158 L1.31994158,10 L0,8.68005842 L3.68005842,5 L8.90101202e-08,1.31994167 L1.31994167,8.90102259e-08 L5,3.68005842 L8.68005842,0 L10,1.31994158 L6.31994158,5 Z" id="x" fill={color ?? "#000000"} fillRule="nonzero"></path>
        </g>
    </svg>
)

export default CloseIcon