import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data'
import Column from './column'
import styled from 'styled-components'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'

const Container = styled.div`
  display :flex
`

class App extends React.Component {
  state = initialData;

  onDragStart = () => {
    document.body.style.color = "orange";
    document.body.style.background = "background-color 0.2s ease";
  };

  onDragUpdate = update => {
    const { destination } = update;
    // const opacity = destination 
    // ? destination.index / Object.keys(this.state.task).length : 0;
    // document.body.style.backgroundColor = `rgba(153,141,217, ${opacity})`;
  }

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.background = 'inherit'
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start == finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };
      this.setState(newState);
      return;
    }
    // MOVING

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index,1);
    const newStart = {
      ...start,
      taskIds : startTaskIds
    }
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index,9 , draggableId);
    const newFinish = {
      ...finish,
      taskIds : finishTaskIds,
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,

      }
    };
    this.setState(newState);
  };

  render() {
    return (

      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            console.log(column);
            const task = column.taskIds.map(taskId => this.state.tasks[taskId])
            console.log(task);

            return <Column key={column.id} column={column} task={task} />
          })}
        </Container>
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


