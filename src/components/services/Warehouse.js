/* Stateful Component */
import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0 1em;
  display: flex;
`

const Image = styled.img.attrs({
  className: 'img-fluid'
})`
  max-height: 40px;
`

const Content = styled.div`
  border-left: thin solid black;
  ${'' /* margin: 1em 0; */}

`

class DemoComponent extends React.Component {
  state = {
    list: [
      {
        name: 'Lays',
        src: 'https://i.ebayimg.com/images/i/152480014069-0-1/s-l1000.jpg',
        quantity: 40,
        location: 'Warehouse Chatuchak',
        type: '❄️',
        status: 'In-stock'
      },
      {
        name: 'Lays',
        src: 'https://i.ebayimg.com/images/i/152480014069-0-1/s-l1000.jpg',
        quantity: 40,
        location: 'Warehouse Chatuchak',
        type: '❄️',
        status: 'In-stock'
      },
      {
        name: 'Lays',
        src: 'https://i.ebayimg.com/images/i/152480014069-0-1/s-l1000.jpg',
        quantity: 40,
        location: 'Warehouse Chatuchak',
        type: '❄️',
        status: 'In-stock'
      },
      {
        name: 'Lays',
        src: 'https://i.ebayimg.com/images/i/152480014069-0-1/s-l1000.jpg',
        quantity: 40,
        location: 'Warehouse Chatuchak',
        type: '❄️',
        status: 'In-stock'
      },
    ]
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Location</th>
              <th className="text-center" scope="col">Type</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item, i) =>
              <tr>
                <th scope="row">{i+1}</th>
                <td>
                  <Image src={item.src} alt=""/>
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
                <td className="text-center">{item.type}</td>
                <td>{item.status}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default DemoComponent
