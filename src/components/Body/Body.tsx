import Breadcrumb from "../Breadcrumb/Breadcrumb";
import {BodyContainer, BodyContent, BodyHeader, BodyTitle} from "./Body-styled";
import Button from "../Button/Button";
import TaskRow from "../TaskRow/TaskRow";
import React, {useEffect, useState} from "react";
import {TaskProvider} from "../../hooks/useTaskContext";
import Tabs from "../Tabs/Tabs";
import {groupTasks} from "../../utils/dataHelpers";
import Overlay from "../Overlay/Overlay";

const Body = () => {
    const storedTasks = localStorage.getItem("tasks")
    const [tasks, setTasks] = useState<Task[]>(() => storedTasks ? JSON.parse(storedTasks) : [])
    const [groupedTasks, setGroupedTasks] = useState(() => groupTasks(tasks))
    const [activeTab, setActiveTab] = useState<string>( (Object.keys(groupedTasks) ?? [""])[0])
    const [tabData, setTabData] = useState<Task[]>(tasks)
    const [overlayName, setOverlayName] = useState("")

    const openAddTaskOverlay = () => {
        setOverlayName("addTask")
    }

    useEffect( () => {
        setGroupedTasks(groupTasks(tasks))
    }, [tasks])

    useEffect( () => {
        type groupedTasksKey = keyof typeof groupedTasks
        const activeTabData = groupedTasks.hasOwnProperty(activeTab) ? groupedTasks[activeTab as groupedTasksKey] : tasks
        setTabData(activeTabData)
    }, [activeTab, groupedTasks])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    return (
        <BodyContainer data-testid={"body-container"}>
            <TaskProvider tasks={tasks} setTasks={setTasks} activeTab={activeTab} setActiveTab={setActiveTab}>
                <Breadcrumb breadcrumbs={["Today"]} />
                <Tabs availableTabs={Object.keys(groupedTasks)} activeTab={activeTab} setActiveTab={setActiveTab} />
                <BodyHeader>
                    <BodyTitle>{activeTab}</BodyTitle>
                    <Button variant={"primary"} content={"add a task"} icon={"add"} onBtnPress={openAddTaskOverlay} />
                </BodyHeader>
                <BodyContent>
                    {tabData.map((task) => (
                        <div key={`task_${task.id}`}>
                            <TaskRow task={task} />
                        </div>
                    ))}
                    {tabData.length < 1 && <div> No data to show </div>}
                </BodyContent>
                <Overlay name={overlayName} setOverlayName={setOverlayName} />
            </TaskProvider>
        </BodyContainer>
    )
}

export default Body