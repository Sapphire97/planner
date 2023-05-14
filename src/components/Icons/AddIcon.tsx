type IconProps = {
    color?: string
}
const AddIcon = ({color}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px" fill={color ?? "#FFFFFF"}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
)
export default AddIcon