import React from 'react';
import { Table, SplitButton, Dropdown } from 'react-bootstrap';

class WordTableComponent extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Dimension</th>
              <th>Feature</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 1 </td>
              <td>
                <SplitButton
                  key={'Secondary'}
                  id={'dropdown-split-variants-secondary'}
                  variant={'secondary'}
                  title={'Available Dimensions'}
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>{' '}
              </td>
              <td>
                  <SplitButton
                      key={'Secondary'}
                      id={'dropdown-split-variants-secondary'}
                      variant={'secondary'}
                      title={'Available Features'}
                    >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </SplitButton>{' '}
              </td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                  <SplitButton
                      key={'Secondary'}
                      id={'dropdown-split-variants-secondary'}
                      variant={'secondary'}
                      title={'Available Dimensions'}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </SplitButton>{' '}
              </td>
              <td>
                <SplitButton
                    key={'Secondary'}
                    id={'dropdown-split-variants-secondary'}
                    variant={'secondary'}
                    title={'Available Features'}
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </SplitButton>{' '}
              </td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        )
  }
}

export default WordTableComponent;