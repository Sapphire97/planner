import React from "react"
import {Tab, TabsContainer} from "./Tabs-styled";
import {primaryColor} from "../../utils/globals";

type TabsProps = {
    availableTabs: string[]
    activeTab: string
    setActiveTab: (activeTab: string) => void
}

const Tabs = ({availableTabs, activeTab, setActiveTab}: TabsProps) => {
    return (
        <TabsContainer>
            {availableTabs.map((tab) => (
                <Tab tabIndex={-1} key={tab} role={"tab"}
                     onClick={() => setActiveTab(tab)}
                     style={{
                         color: activeTab === tab ? primaryColor : "#031c2d",
                         borderBottom: activeTab === tab ? `3px solid ${primaryColor}`: "none"
                }}>
                    {tab}
                </Tab>
            ))}
        </TabsContainer>
    )
}

export default Tabs