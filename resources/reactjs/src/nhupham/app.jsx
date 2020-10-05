import React from 'react';
import './App.css';

class TodoList extends React.Component {
    render () {
        const items = this.props.items.map((item, index) => {
            return (
                <TodoListItem key={index} item={item} index={index} />
            );
        });
        return (
            <div className="list-wrapper">
                <ul className="d-flex flex-column-reverse todo-list"> {items} </ul>
            </div>
        );
    }
}

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
            <li>
                <div className="form-check">
                    <label className="form-check-label">{this.props.item.name}</label>
                </div>
            </li>
        );
    }
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            event: ''
        };
    }

    changeEventText = e => {
        const {value} = e.target;
        this.setState({
            event: value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const newItemValue = this.state.event;
        if (Object.keys(this.state.event).length) {
            this.props.addItem({newItemValue});
            this.setState({
                event: ''
            });
        } else {
            alert('Please enter the value');
        }
    }
    render () {
        const { event } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="add-items d-flex">
                    <input type="text" className="form-control todo-list-input" value={event ? event : ''} onChange={this.changeEventText}/>
                    <button
                        className="add btn btn-primary font-weight-bold todo-list-add-btn" type="submit">Add
                    </button>
                </div>
            </form>
        );
    }
}

class TodoHeader extends React.Component {
    render () {
        return <h1 className="card-title">User API</h1>;
    }
}

class AppNhuPhamApi extends React.Component {
    constructor (props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {
            todoItems: [],
            error: null
        };
    }

    componentDidMount() {
        this.fetchUsers();
    };

    fetchUsers = () => {
        fetch('https://laravel-training.local/api/nhuphamusers')
            .then(res => res.json())
            .then(
                (todoItems) => {
                    this.setState({
                        todoItems
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    };

    addItem = todoItem => {

        // refer: https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
        const data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                /*'Authorization': 'Bearer my-token',*/ // if using api_token (api_token in users table)
            },
            body: JSON.stringify({
                name: todoItem.newItemValue
            })
        };
        let value = null;
        fetch('https://laravel-training.local/api/nhuphamusers/create', data)
            .then(res => res.json())
            .then(
                (newUser) => {
                    console.log(newUser);
                    console.log(newUser.name);
                    /*this.fetchUsers();*/ // fetch user again
                    /* Add new user to state */
                    this.setState({
                        todoItems: [...this.state.todoItems, {
                            name: newUser.name
                        }],
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }
    render() {
        const { todoItems, error } = this.state;
        return error ? (<div className="error-api"><b>Co loi ne:</b> {error.message}!!!!</div>) : (
            <div className="page-content page-container" id="page-content page-container">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="card px-3">
                                <div className="card-body">
                                    <TodoHeader/>
                                    <TodoForm addItem={this.addItem}/>
                                    <TodoList items={todoItems}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AppNhuPhamApi;
