interface Task {
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    createdOn: Date,
    updatedOn: Date,
    subTasks: SubTask[],
    isArchived?: boolean
}