const groupTasks = (tasks: Task[]): TaskGroups => {
    const today = new Date()
    const taskGroups: TaskGroups = { today: [], overdue: [], upcoming: [], archived: [] }

    tasks.forEach((task) => {
        if (task.isArchived) {
            taskGroups.archived.push(task)
        }
        else if (isSameDay(new Date(task.dueDate), today)) {
            taskGroups.today.push(task)
        } else if (new Date(task.dueDate) < today) {
            taskGroups.overdue.push(task)
        } else {
            taskGroups.upcoming.push(task)
        }
    })

    return taskGroups
}

const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    )
}

const mapSubTasks = (inputs: InputState[]): SubTask[] => {
    const subTasks: SubTask[] = []
    for (let i = 0; i < inputs.length; i++)
        subTasks.push({id: i+1, title: inputs[i].value, isDone: false })
    return subTasks
}

export { groupTasks, mapSubTasks }