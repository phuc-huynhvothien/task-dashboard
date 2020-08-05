import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data'
import Column from './column'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
class App extends React.Component {
  state = initialData;

  onDragEnd = result =>{
    
  }

  render() {
    return(

    <DragDropContext
        onDragUpdate={this.onDragEnd}
    >
      {this.state.columnOrder.map((columnId) => {
        const column = this.state.columns[columnId];
        const task = column.taskIds.map(taskId => this.state.tasks[taskId])


        return <Column key={column.id} column={column} task={task} />
      })}
    </DragDropContext>
    );
  }
}

 





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


