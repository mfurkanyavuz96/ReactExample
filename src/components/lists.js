import React, { Component} from 'react';
import example_response from './data/example_response';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './lists.css'
import { Form} from 'react-bootstrap';


class ListElements extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_list: {},
            open: true,
            media_url: "",
            media_type: "",
            action: "",
            captain: "",
            category: "",
            position: []
        };
    }
    componentWillMount = () => {
        let all_data = [];
        let id_ = 0;
        example_response.data.forEach(subdata => {
            let one_data = {
                id: id_,
                media_url: subdata.media[0].url,
                media_type: subdata.media[0].type,
                date: subdata.details[0].value,
                type: subdata.details[1].value,
                route: subdata.details[2].value,
                category: subdata.details[3].value,
                action: subdata.details[4].value,
                vehicle: subdata.details[6].value,
                captain: subdata.details[7].value,
                latitude: subdata.location.latitude,
                longitude: subdata.location.longitude
            }
            all_data.push(one_data)
            id_ += 1;
            
        })
        this.setState({
            data_list: all_data
        })
    }

    render () {
        const selectRowProp = {
            mode: 'radio',
            clickToSelect: true,
            bgColor: '#e6d98a',
            onSelect: (row, isSelect, rowIndex, e) => {
                console.log(row)
                this.setState({
                    media_url: row.media_url,
                    media_type: row.media_type,
                    action: row.action,
                    captain: row.captain,
                    category: row.category,
                    position: [row.latitude, row.longitude]
                })
            }
        };
        
        return (
            <div className={'index'}>
                <div className={'left-half'}>
                    <BootstrapTable data={ this.state.data_list } bordered={ false } selectRow={ selectRowProp } striped hover condensed>
                        <TableHeaderColumn dataField='vehicle' >Vehicle</TableHeaderColumn>
                        <TableHeaderColumn dataField='type' >Type</TableHeaderColumn>
                        <TableHeaderColumn dataField='date' isKey={ true }> Date</TableHeaderColumn>
                        <TableHeaderColumn dataField='route' >Route</TableHeaderColumn>
                    </BootstrapTable> 
                </div>
                <div className={'right-half'}>
                    <section className={'container'}>
                        <div className={'one'}>
                            <h5>Captain</h5>
                            <h4>{this.state.captain}</h4>
                        </div>
                        <div className={'two'}>
                            <h5>Operation</h5>
                            <h4>{this.state.action}</h4>
                        </div>
                        <div className={'one'}>
                            <h5>Category</h5>
                            <h4>{this.state.category}</h4>
                        </div>
                    </section>
                    <Form.Group>
                        <Form.Control as="select" size="lg">
                            <option>TAKE ACTION</option>
                            <option>MARK AS SEEN</option>
                            <option>CREATE AN AD-HOC TASK</option>
                            <option>MAKE A COMMENT</option>
                        </Form.Control>
                    </Form.Group>
                    {this.state.media_type === "image" ? <img src={this.state.media_url} width ="450px" height ="150px"></img> : <p>No Media Content</p>}
                    <img src="https://public-v2links.adobecc.com/18d8a180-7e75-43e5-6cf5-657e0be594e2/component?params=component_id%3Aa503ff17-0895-40b5-b483-52b938dc5d55&params=version%3A0&token=1599907678_da39a3ee_226924540c7422d7ff1bc85e01dcbdade9d4509c&api_key=CometServer1" width ="450px" height ="250px"></img>
                </div>
            </div>
            
        )
    }
}



export default ListElements;