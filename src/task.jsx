import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiFillBug } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FcAssistant, FcOnlineSupport } from 'react-icons/fc';
import { TiArrowRightThick } from 'react-icons/ti';
import { AiFillStar } from 'react-icons/ai';

const ContainerStyled = styled(Container)`
border-radius: 2px;
padding : 8px;
margin-bottom : 8px;
background-color : ${props => (props.isDragging ? 'lightgreen' : 'white')};
border-radius : 10px;
`;

const TaskX = styled.div`
    width : 20px;
    height : 20px;
    border-radius : 4px;
    margin-right : 8px;
`
const ColLeft = styled(Col)`
text-align : left
`
const ColRight = styled(Col)`
text-align : right
`

const ButtonStyled = styled(Button)`
background : red;
border : none;
`
export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index} >
                {(provided, snapshot) => (
                    <ContainerStyled
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <Row>
                            <ColLeft>
                                <AiFillBug style={{ color: 'red' }} />      {this.props.task.title}
                            </ColLeft>
                        </Row>
                        <Row>
                            <ColLeft>
                                <FaRegCalendarAlt /><FcAssistant /><TiArrowRightThick /><FcOnlineSupport />
                            </ColLeft>
                            <ColRight>
                                <ButtonStyled size="sm">
                                    {this.props.type}
                                </ButtonStyled>{' '} <AiFillStar  style={{ color: '#feb902' }} />
                            </ColRight>
                        </Row>

                    </ContainerStyled>
                )}
            </Draggable>
        )
    }
} 