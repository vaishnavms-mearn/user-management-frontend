import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '15px', color: 'white' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free</span>
            <MDBBtn type='button' outline color="light" rounded>
              Sign up!
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' >
        © 2023 Copyright:
        <a className='text-white' href='#'>
          UserVerse.com
        </a>
      </div>
    </MDBFooter>
  );
}