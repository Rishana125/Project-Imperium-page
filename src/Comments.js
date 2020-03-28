import React from 'react';
import {Form, Button, ListGroup} from 'react-bootstrap';

const Comments = (props) => {
    const themes = [
        'text-danger border-danger',
        'text-info border-info',
        'text-success border-success',
        'text-warning border-warning',
        'text-light border-light'
    ];

    return (
        <div className="mr-3 ml-3 mt-4">
            <Form onSubmit={props.data.handleSubmit}>
                <Form.Group>
                    <Form.Label>Leave a comment</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        className="bg-dark text-light"
                        placeholder="Enter your nickname"
                        onChange={props.data.handleChange}
                        value={props.data.state.name}/>
                    <Form.Control
                        as="textarea"
                        name="comment"
                        className="mt-2 bg-dark text-light"
                        placeholder="Enter your comment"
                        rows="3"
                        onChange={props.data.handleChange}
                        value={props.data.state.comment}/>
                </Form.Group>
                <div className="text-right">
                    <Button
                        size="lg"
                        variant="outline-light"
                        type="submit">
                        Send
                    </Button>
                </div>
            </Form>
            <div>
                <h3>Comments</h3>
                { !props.data.state.items.length &&
                  <p>No comments yet.</p>
                }
                <ListGroup as="ul">
                    { props.data.state.items.map((item, index) =>
                        <ListGroup.Item
                            key={index}
                            as="li"
                            className={themes[index % themes.length]}
                            disabled>
                                <h5>{item.name} sends:</h5>
                                <p>{item.comment}</p>
                                <h6>{item.date}</h6>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        </div>
    );
};

export default Comments;