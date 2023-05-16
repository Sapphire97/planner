import React from "react";
import {groupTasks, mapSubTasks} from "./dataHelpers";

describe("groupTasks", () => {
    test("groups tasks correctly", () => {
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(today.getDate() + 1)
        const yesterday = new Date(today)
        yesterday.setDate(today.getDate() - 1)

        const tasks: Task[] = [
            { id: 1, title: "Task 1", description: "This is a test 1", dueDate: yesterday, createdOn: yesterday, updatedOn: yesterday, isArchived: false, subTasks: [] },
            { id: 2, title: "Task 2", description: "This is a test 2", dueDate: today, createdOn: yesterday, updatedOn: yesterday, isArchived: false, subTasks: [] },
            { id: 3, title: "Task 3", description: "This is a test 3", dueDate: tomorrow, createdOn: yesterday, updatedOn: yesterday, isArchived: false, subTasks: [] },
            { id: 4, title: "Task 4", description: "This is a test 4", dueDate: today, createdOn: yesterday, updatedOn: yesterday, isArchived: true, subTasks: [] }
        ]

        const groupedTasks = groupTasks(tasks)

        expect(groupedTasks.overdue).toHaveLength(1)
        expect(groupedTasks.today).toHaveLength(1)
        expect(groupedTasks.upcoming).toHaveLength(1)
        expect(groupedTasks.archived).toHaveLength(1)
    })
})

describe("mapSubTasks", () => {
    test("maps input state to subtasks", () => {
        const inputs: InputState[] = [
            { id: 1, value: "Subtask 1", isDone: false },
            { id: 2,  value: "Subtask 2", isDone: false },
            { id: 3,  value: "Subtask 3", isDone: false }
        ]

        const subTasks = mapSubTasks(inputs)

        expect(subTasks).toHaveLength(3)
        expect(subTasks[0].id).toBe(1)
        expect(subTasks[0].title).toBe("Subtask 1")
        expect(subTasks[0].isDone).toBe(false)
    })
})
