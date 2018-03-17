/* Stateful Component */
import React from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar'

const Form = styled.div``

class DemoComponent extends React.Component {
  state = {}

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <h1 className="pl-2" style={{ borderLeft: 'thick solid red'}} >Order</h1>
        <div className="row">
          <div className="col">
            <h3>Vehicle Type</h3>

            <Form>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label class="form-check-label" for="defaultCheck1">
                  Cold ❄️
                </label>
              </div>
            </Form>

            <Calendar />
          </div>
          <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.532426632511!2d100.5239868478224!3d13.740648941347278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299322f49c1cb%3A0xf2ea50726712d88e!2sTesco+Lotus+Rama+I!5e0!3m2!1sth!2sth!4v1521271505424" width="500" height="350" frameborder="0" style={{border: '0'}} allowfullscreen></iframe>
          </div>
        </div>
        <hr/>
        <h1>History</h1>
      </div>
    )
  }
}

export default DemoComponent
