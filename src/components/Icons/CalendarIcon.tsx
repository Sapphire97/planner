import React from "react";

const CalendarIcon = ({ color } : IconProps) => (
    <svg width="7px" height="8px" viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>calendar</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="calendar" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M0,5 L14,5 L14,6 L0,6 L0,5 Z M3,0 L4,0 L4,4 L3,4 L3,0 Z M10,0 L11,0 L11,4 L10,4 L10,0 Z M0,2.5 C-8.32667268e-17,1.67157288 0.671572875,1 1.5,1 L12.5,1 C13.3284271,1 14,1.67157288 14,2.5 L14,14.5 C14,15.3284271 13.3284271,16 12.5,16 L1.5,16 C0.671572875,16 1.66533454e-16,15.3284271 0,14.5 L0,2.5 Z M1,2.5 L1,14.5 C1,14.7761424 1.22385763,15 1.5,15 L12.5,15 C12.7761424,15 13,14.7761424 13,14.5 L13,2.5 C13,2.22385763 12.7761424,2 12.5,2 L1.5,2 C1.22385763,2 1,2.22385763 1,2.5 Z" id="square" fill={color ?? "#000000"} fillRule="nonzero"></path>
        </g>
    </svg>
)

export default CalendarIcon