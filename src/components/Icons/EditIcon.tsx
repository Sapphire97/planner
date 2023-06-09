import React from "react"
const EditIcon = ({ color } : IconProps) => (
    <svg width="14px" height="14px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>edit</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="edit" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M7.92572798,3.38058632 L1.00199753,9.72012002 L1.00199753,12 L3.30623854,12 L10.2321641,5.68351874 L7.92572798,3.38058632 Z M8.66400508,2.7046021 L10.9718396,5.00893075 L12.4234573,3.6850476 L10.1147108,1.37630112 L8.66400508,2.7046021 Z M0.00199752679,9.27987998 L9.43940417,0.638764047 C9.8341134,0.277358806 10.4433938,0.290770556 10.8218176,0.669194342 L13.1305641,2.97794082 C13.5210884,3.36846511 13.5210884,4.00163009 13.1305641,4.39215438 C13.1197237,4.40299474 13.1086355,4.41358438 13.0973082,4.42391491 L3.69376146,13 L0.00199752679,13 L0.00199752679,9.27987998 Z" id="Combined-Shape" fill={color ?? "#000000"} fillRule="nonzero"></path>
            <polygon id="Path-16" fill={color ?? "#000000"} fillRule="nonzero" points="0 16.013414 0 15.013414 16 15.013414 16 16.013414"></polygon>
        </g>
    </svg>
)
export default EditIcon