import {BreadcrumbContainer, BreadcrumbItem} from "./Breadcrumb-styled";
import {Icon} from "../../utils/helpers";

type BreadcrumbProps = {
    breadcrumbs: string[]
}

const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {

    return (
        <BreadcrumbContainer id={"breadcrumb"} data-testid={"breadcrumb-container"}>
            <BreadcrumbItem data-testid={"breadcrumb-item"}> <span> <Icon name={"home"} color={"primary"} /> </span> </BreadcrumbItem>
            {
                breadcrumbs.map((breadcrumb, index) => (
                    <BreadcrumbItem islast={(breadcrumbs.length === index + 1) ? 1 : 0} key={index} data-testid={"breadcrumb-item"}>
                        <span>{breadcrumb}</span>
                    </BreadcrumbItem>
                ))
            }
        </BreadcrumbContainer>
    )
}

export default Breadcrumb