import React from 'react'

function Filter() {
    return (
        <section>
            <div className="bars">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <a href="">London Gatwick</a>
                        </div>
                        <div className="col-2">
                            <a href="">Paphos Area</a>
                        </div>
                        <div className="col-2">
                            <a href=''> 08 Jul +/- 3 days</a>
                        </div>
                        <div className="col-2">
                            <a href=''>14 Nights</a>
                        </div>
                        <div className="col-2">
                            <a href="">2 Guests </a>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary form-control" type="button">EDIT SEARCH</button>
                        </div>
                    </div>

                </div>
            </div>


            <div className="body-conent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='d-flex person'>
                                <p>
                                    Price per person</p>
                                <div className="form-check form-switch mx-3">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                </div>
                                <p>Total price</p>
                            </div>
                            <div className="filter my-3">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Board
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        All inclusive
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Full board
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Half board
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Bed & breakfast
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Self catering
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Room only
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Star rating
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                        <i className="fa fa-star-o"></i>
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i>
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <i className="fa fa-star"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i>
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <img src="trip.png" className='img-fluid' alt=''/>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled31" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled32" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled33" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled34" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled35" id="flexRadioDisabled" checked disabled />
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled21" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled22" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled23" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled24" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled25" id="flexRadioDisabled" disabled />
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled11" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled12" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled13" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled14" id="flexRadioDisabled" disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled15" id="flexRadioDisabled" disabled />
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled01" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled02" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled03" id="flexRadioDisabled" disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled04" id="flexRadioDisabled" disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled05" id="flexRadioDisabled" disabled />
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled1" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled2" id="flexRadioDisabled" disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled3" id="flexRadioDisabled" disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled4" id="flexRadioDisabled" disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled5" id="flexRadioDisabled" disabled />
                                                        <span className='number'>(11)</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapseOne">
                                                Budget per person
                                            </button>
                                        </h2>
                                        <div id="collapsefour" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        No maximum

                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        £250

                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        £750
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        £1000
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        £2000
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseTwo">
                                                Holiday type
                                            </button>
                                        </h2>
                                        <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Beach
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Couples
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Family
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Honeymoon
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Luxury
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Spa & relaxation
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                                                Facilities
                                            </button>
                                        </h2>
                                        <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Adult only areas
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Beauty saloon/treatments
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Bike hire
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Bike hire
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Bike hire
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Bike hire
                                                    </label>
                                                </div>
                                                <label>See more</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="true" aria-controls="collapseOne">
                                                Pool
                                            </button>
                                        </h2>
                                        <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Indoor pool
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Infinity pool
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Kids pool
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Outdoor pool
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Pool bar
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Swimming pool
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Water slides
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="true" aria-controls="collapseOne">
                                                Kids
                                            </button>
                                        </h2>
                                        <div id="collapseeight" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Kids cub
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Kids pool
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Playground
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Theme parks
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Water slide
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-9 px-3">
                            <div className="float-right" style={{ width: 250 }}>

                                <div className="mb-3 row">
                                    <label htmlhtmlFor="inputPassword" className="col-sm-3 col-form-label"> Sort By</label>
                                    <div className="col-sm-9">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Most popular </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <h2><b>241</b> Holidays found</h2>

                            <div className="confident">
                                <div className="row w-100">
                                    <div className="col-md-1 pt-2 px-3">
                                        <img src=" Layer01.png" className="img-fluid" alt=''/>
                                    </div>
                                    <div className="col-md-10">
                                        <h6 className='m-0 mt-2'>Book with confidence</h6>
                                        <p>ATOL Protected, flexible holidays with price match guarantee.<span> <a href="#">Learn more </a> </span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className='row mt-3' style={{ border: "0.5px solid #e1e1e1" }}>
                                    <div className='col-md-4 p-0'>
                                        <div className='Beach'>
                                            <p>Beach hotel</p>
                                        </div>
                                        <img src="image.png" width="100%" height="100%" alt=''/>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='hotal-detail'>
                                            <h4>Iberostar Beach Resort & Spa</h4>
                                            <p>Aphrodite hills, Paphos Area, Cyprus  <a href="#"> VIEW IN MAP </a></p>
                                            <div className='d-flex mt-3'>
                                                <div className='d-flex'>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <img src="owl.png" className='img-fluid' alt='' />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <input className="form-check-input" type="radio" name="flexRadio1" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadio2" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadio3" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadio4" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadio5" id="flexRadioDisabled" disabled />
                                                        <span className='Review'>276 Review</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <p><img src="call.png" className='img-fluid' alt='' /> Tue 05 Jul 2022 - 14 nights</p>
                                            <p><img src="bed.png" className='img-fluid' alt=''/> Deluxe Double Room with Garden or Pool View with Balcony</p>
                                            <small>Only 5 rooms left</small>
                                            <p><img src="plane.png" className='img-fluid' alt='' /> London Gatwick - Direct <a href="#">  View flight details </a></p>
                                            <p><img src="sun.png" className='img-fluid' alt=''/> Honeymoon offer</p>
                                        </div>
                                    </div>
                                    <div className='col-md-2 text-center'>
                                        <div className='price-detail'>
                                            <div className='wishlist'>
                                                <i className="fa fa-heart-o"></i>
                                            </div>
                                            <div className=' text-right'>
                                                <p>Includes £267 pp discount</p>
                                                <p>£39 pp deposit</p>

                                            </div>
                                            <p>£<span className="price">1302</span> pp (half-board)</p>
                                            <button className='btn btn-success' type='button'>Availability</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center my-3'>
                                    <button className='btn btn-primery' type="button">Load more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12 mb-3'>
                            <h3>Your recently viewed hotels</h3>
                        </div>
                        <div className='col-md-6'>
                            <div className='card'>
                                <img src="image.png" className="card-img-top" alt="..." />
                                <div className='cardbody p-3'>
                                    <div className='row'>
                                        <div className='col-md-9'>
                                            <h4>Iberostar Beach Resort & Spa</h4>
                                            <p>Aphrodite hills, Paphos Area, Cyprus  <a href="">VIEW IN MAP </a></p>
                                            <div className='d-flex'>
                                                <div className='d-flex'>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <img src="owl.png" className='img-fluid' alt=''/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled101" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled102" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled103" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled104" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled105" id="flexRadioDisabled" disabled />
                                                        <span className='Review'>276 Review</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 text-center mt-4'>
                                            <button className='btn btn-success' type="button">Availability</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 '>
                            <div className='card'>
                                <img src="image.png" className="card-img-top" alt="..." />
                                <div className='cardbody p-3'>
                                    <div className='row'>
                                        <div className='col-md-9'>
                                            <h4>Iberostar Beach Resort & Spa</h4>
                                            <p>Aphrodite hills, Paphos Area, Cyprus <a href="">VIEW IN MAP </a></p>
                                            <div className='d-flex'>
                                                <div className='d-flex'>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <img src="owl.png" className='img-fluid' alt="..."/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled001" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled002" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled003" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled004" id="flexRadioDisabled" checked disabled />
                                                        <input className="form-check-input" type="radio" name="flexRadioDisabled005" id="flexRadioDisabled" disabled />
                                                        <span className='Review'>276 Review</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 text-center mt-4'>
                                            <button className='btn btn-success' type="button">Availability</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>

    )
}

export default Filter
