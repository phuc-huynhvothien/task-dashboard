import React from 'react'
import styled from 'styled-components'
import Task from './task'
import { Droppable } from 'react-beautiful-dnd'
// import { H6 } from 'react-bootstrap';

const Container = styled.div`
margin: 8px;
border : 1px solid gray;
border-radius: 2px
height : 400px;
`;
const Title = styled.h3`
padding : 8px;`;
const TaskList = styled.div`
    padding : 8px;
    background-color : ${props =>(props.isDraggingOver ? 'skyblue' : 'white')}
    flex-grow : 1;
    min-height : 100px;
    height : 600px;
`;
const H6 = styled.h6`
    padding : 15px ;
`;



export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <H6>{this.props.column.title}</H6>
                <Droppable droppableId={this.props.column.id}
                >
                    {(provided,snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.task.map((task, index) => <Task key={task.id} task={task} index={index} type={this.props.column.types} color={this.props.column.color} />)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}