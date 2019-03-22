import * as React from 'react';
import Collapse from 'rc-collapse';

export default class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: "1"};
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentWillMount() {
        this.props.handleStep(2);
    }

    handleClick(activeKey) {
        this.setState({activeKey: activeKey});
    }

    render() {
        return (
            <Collapse accordion={true}>
                <Collapse.Panel header="hello" headerClass="my-header-class">this is panel content</Collapse.Panel>
                <Collapse.Panel header="title2">this is panel content2 or other</Collapse.Panel>
            </Collapse>
        )
    }
}
// render(<Step2/>,document.getElementById("root"));
// [{members:[{
//     name: required:
// }]
// }]