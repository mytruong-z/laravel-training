import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes, faSquareFull} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import {fetchTodoApi, completeTodo, deleteTodo} from '../store/TodoKhoaAction';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Todo} from '../models/todo';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: '67vh',
    },
    rowCompleted: {
        textDecoration:'line-through'
    },
});

interface Props {
    tasks: Todo[];
    fetchTodoApi: (limit: number, offset: number) => void;
    completeTodo: (index: number) => void;
    deleteTodo: (index: number) => void;
}

const TodoList: React.FC<Props> = (props) => {
    const classHtml = useStyles();
    const {tasks, fetchTodoApi, completeTodo, deleteTodo} = props;
    const [firstLoad, setFirstLoad] = useState(true);
    useEffect(() => {

        if (firstLoad) {
            fetchTodoApi(0, 100);
            setFirstLoad(false);
        }

    }, [firstLoad, fetchTodoApi]);

    const processingDelete = (index: number) => {
        const result = window.confirm("Are you sure you want to delete this item?");
        if (result === true) {
            deleteTodo(index);
        }
    };

    return (
        <>
            {firstLoad ?
                <CircularProgress/>
                :
                <>
                    <Paper className={classHtml.root}>
                        <TableContainer className={classHtml.container}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="default">Completed</TableCell>
                                        <TableCell padding="default">Text</TableCell>
                                        <TableCell padding="default">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tasks.map((todo: Todo, index: number) => {
                                        return (
                                            <TableRow key={index} hover={true}
                                                      className={todo.completed ? 'completed' : ''}>
                                                <TableCell component="th" scope="row">
                                                    <span onClick={() => completeTodo(index)}>
                                                        <FontAwesomeIcon icon={todo.completed ? faCheck : faSquareFull} style={todo.completed ? {color: "#6DB65B"} : {color: "#CCCCCC"} }/>
                                                    </span>
                                                </TableCell>
                                                <TableCell className={todo.completed ? classHtml.rowCompleted : ''} onClick={() => completeTodo(index)}><span>{todo.title}</span></TableCell>
                                                <TableCell>
                                                    <span onClick={() => processingDelete(index)}>
                                                        <FontAwesomeIcon icon={faTimes} style={{color: "#E91E63"}}/>
                        				            </span>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </>
            }
        </>

    );
};

const mapStateToProps = (state: any) => ({
    tasks: state.TodoKhoaReducer.results
});

const mapDispatchToProps = (dispatch: Function) => ({
    fetchTodoApi: (limit: number, offset: number) => dispatch(fetchTodoApi(limit, offset)),
    completeTodo: (index: number) => dispatch(completeTodo(index)),
    deleteTodo: (index: number) => dispatch(deleteTodo(index))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

