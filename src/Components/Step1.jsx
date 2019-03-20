import * as React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const formStyle = {
    padding:"20px 30px"
}
// Should everything be stored as internal state and propagated up to the main component?
export default class Step1 extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = ({step:''})
    // }

    componentWillMount() {
        this.props.handleStep(1);
    }

    render() {
        return (
            <Form id="step1" style={formStyle}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Title"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" className="rounded" placeholder="Meeting Description"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Meeting Date</Form.Label>
                    <div>
                        <DatePicker className="rounded" selected={this.props.initDate} onChange={this.props.handleDate}/>
                    </div>
                </Form.Group>
            </Form>
        )
    }
}