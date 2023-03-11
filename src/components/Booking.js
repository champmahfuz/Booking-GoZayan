import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Booking.module.css';
import logo from '../components/assests/img/logo.jpg';

// className={`${'pb-4'} ${styles.orderCheckout}`
//shadow rounded

const Booking = () => {
    return (
        <Container className={`${'mt-5'} `}>
            <div className={`${'shadow rounded'}  ${styles.wholeCard}`}>

                <div className='rounded-top'>
                    <div className='row'>
                        <div className='col col-md-9 col-sm-7  mt-2'>
                            <h6 className={`${'mt-3 rounded'} ${styles.upperCardTitle}`}>DAC-CXB (One Way)</h6>
                            <br />
                            <div className='row'>
                                <div className='col col-md-4'>
                                    <Container className='text-start'>
                                        <p >Booking Id</p>
                                        <h6>FB_JR2897789368</h6>
                                    </Container>
                                </div>
                                <div className='col col-md-4'>
                                    <Container className='text-start'>
                                        <p>Airline PnR</p>
                                        <p>04VR65</p>
                                    </Container>
                                </div>
                                <div className='col col-md-4'>
                                    <Container className='text-start'>
                                        <p>PaX Details</p>
                                        <p>Jhone Doe</p>
                                    </Container>
                                </div>

                            </div>
                        </div>
                        <div className='col col-md-3 col-sm-5 mt-3'>
                            <Container className='text-end'>
                                <h6>PENDING</h6>
                                <br />
                                <div className={`${styles.icon}`} >
                                    <img src={logo} alt="" />
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
                {/* second card start */}
                <div className='bg-light rounded-bottom'>
                    <div className='row'>
                        <div className='col-md-2 col-sm-12 mt-3'>
                            <Container className='text-start'>
                                <p>Date</p>
                                <p>Wed, 26 Dec, 2022</p>
                            </Container>
                        </div>
                        <div className='col-md-2 col-sm-12 mt-3'>
                            <Container className='text-start'>
                                <p>Time</p>
                                <p>4:56</p>
                            </Container>
                        </div>
                        <div className='col-md-2 col-sm-12 mt-3 text-start'>
                            <Container>
                                <p>Flight Info</p>
                                <p>Departs DAC</p>
                                <p>Arraival CXB</p>
                            </Container>
                        </div>
                        <div className='col-md-3 col-sm-12 mt-3 text-start'>
                            <Container>
                                <p>Flight Number</p>
                                <p>BS143(DAC-CXB)</p>
                                <p>Stops 0</p>
                            </Container>
                        </div>
                        <div className='col-md-3 col-sm-12 mt-3 text-start'>
                            <Container>
                                <p>Baggage Allowance</p>
                                <p>7kg</p>
                                <p>20kg</p>
                            </Container>
                        </div>

                    </div>
                </div>


            </div>
        </Container>
    );
};

export default Booking;