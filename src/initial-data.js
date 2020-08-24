const initialData = {
    tasks: {
        'task-1': { id: 'task-1', title: ' Task out the garbage',status : 1, content: ' Task out the garbage' },
        'task-2': { id: 'task-2', title: ' Task out the garbage',status : 1, content: ' Watch my favorite show' },
        'task-3': { id: 'task-3', title: ' Task out the garbage',status : 1, content: ' Charge my phone' },
        'task-4': { id: 'task-4', title: ' Task out the garbage',status : 1, content: ' Cook dinner' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            types : "Backlog",
            title: 'Backlog',
            color : ["#cccccc"],
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4',]
        },
        'column-2': {
            id: 'column-2',
            types : "Select for Dev",
            title: 'Select for Dev',
            color : ["#8e7cc3","#ff00ff"],
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            types : "Develop",
            title: 'Develop',
            color : ["#93c47d","#3c78d8"],
            taskIds: []
        },
        'column-4': {
            id: 'column-4',
            types : "Done",
            title: 'Done',
            color : ["#dd6b6b","#f4cccc"],
            taskIds: []
        },
        'column-5': {
            id: 'column-5',
            types : "Release",
            title: 'Release',
            color : ["#8e7cc3"],
            taskIds: []
        },
    },


    columnOrder: ['column-1','column-2','column-3','column-4','column-5'],
}
export default initialData;