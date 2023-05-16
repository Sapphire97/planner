import styled, {css} from "styled-components";

const BreadcrumbContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: .875rem;
    font-family: "Open Sans",sans-serif;
    box-sizing: border-box;
    list-style: disc;
`
type BreadcrumbItemProps = {
    islast?: number
}
const BreadcrumbItem = styled.div<BreadcrumbItemProps>`
    margin-right: .75rem;
    display: flex;
    align-items: center;
    list-style: disc;
    ${({ islast }) => islast !== 1 && css`
    &::after {
      content: "›";
      font-weight: 600;
      margin-top: -0.125rem;
      margin-left: .75rem;
      color: #dfe6eb;
      list-style: disc;
    }
  `}
`

export { BreadcrumbContainer, BreadcrumbItem }