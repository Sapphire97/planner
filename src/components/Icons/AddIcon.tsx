const AddIcon = ({color}: IconProps) => (
    <svg width="8px" height="8px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>add</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="add" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M6,4 L10,4 L10,6 L6,6 L6,10 L4,10 L4,6 L0,6 L0,4 L4,4 L4,0 L6,0 L6,4 Z" id="Plus" fill={color ?? "#000000"}></path>
        </g>
    </svg>
)
export default AddIcon