import React from 'react'
import './Contact.css'
import loggo from '../Photoes/Screenshot_٢٠٢٤٠٤٠٦-١٩٥٧٤٤.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { Button, Form } from 'react-bootstrap'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='container contct'>
        <div className='row'>
          <div className='col-lg-6 col-md-6'>
            <div className='flex'>
              <img src={loggo} alt='jent' />
              <div className='icon'>
                <h2><FontAwesomeIcon style={{ color: 'blue'}} icon={faFacebookF} /></h2>
                <h2><FontAwesomeIcon style={{ color: 'red'}} icon={faInstagramSquare} /></h2>
                <h2><FontAwesomeIcon style={{ color: 'green'}} icon={faWhatsappSquare} /></h2>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name: </Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </Form.Group>
              <br/>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Last Name: </Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Form.Group>
              <br/>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Emaile: </Form.Label>
                <Form.Control type="emaile" placeholder="Enter Emaile" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group><br/>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
