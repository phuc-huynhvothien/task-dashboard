import React from 'react'
import styled from 'styled-components'
import Task from './task'
const Container = styled.div`
border : 1px solid gray;
border-radius: 2px
padding : 8px;
margin-bottom : 8px
`;


export default class Column extends React.Component{
    render(){
        return (
           <Container>{this.props.task.content}</Container> 
        )
    }
} 