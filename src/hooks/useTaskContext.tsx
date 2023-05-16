import React, {createContext, ReactNode, useContext, useState} from 'react'

interface TaskContextValue {
    tasks: Task[]
    setTasks: (tasks: Task[]) => void
    activeTab: string
    setActiveTab: (activeTab: string) => void
    selectedTask: Task | null
    setSelectedTask: (task: Task) => void
}

const TaskContext = createContext<TaskContextValue>({tasks: [], setTasks: () => {}, activeTab: "", setActiveTab: () => {}, selectedTask: null, setSelectedTask: () => {}})

type TaskProviderProps = {
    children: ReactNode
    tasks: Task[]
    setTasks: (tasks: Task[]) => void
    activeTab: string
    setActiveTab: (activeTab: string) => void

}

const TaskProvider = ({children, tasks, setTasks, activeTab, setActiveTab}: TaskProviderProps) => {

    const [selectedTask, setSelectedTask] = useState<Task | null>(null)

    return (
        <TaskContext.Provider value={{
        tasks, setTasks, activeTab, setActiveTab, selectedTask, setSelectedTask}}>
    {children}
    </TaskContext.Provider>
)
}

const useTaskContext = () => useContext(TaskContext)

export { TaskProvider, useTaskContext }