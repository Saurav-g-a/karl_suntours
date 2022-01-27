import React from 'react'

function header() {
  return (
    <div className="container narrow">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand"><img src="home-alternate.png" alt="..." style={{ marginTop: '-27px', marginLeft: '-20px' }} width="301px" height="45px" /></a>
          <button className="navbar-toggler d-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 m-lg-auto">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Travel Alerts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shortlist (0)</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Manage Booking </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-bars"></i> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mobile">
        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-bars"></i> </a>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" style={{ marginTop: '6.75rem' }}>
          <div className="modal-content">

            <div className="modal-body" style={{ paddingLeft: '0px', paddingTop: '0px' }}>
              <div className="float-right pt-2">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="mega-menu ">
                <div className="row">
                  <div className="col-md-3" style={{ paddingLeft: '0px', paddingTop: '0px' }}>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a href="#" className="nav-link active" id="pills-Holidays-tab" data-bs-toggle="pill" data-bs-target="#pills-Holidays" type="button" role="tab" aria-controls="pills-Holidays" aria-selected="true"> <img src="holi.png" className="img-fluid" alt="..."/>Holidays  &nbsp;&nbsp; ></a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a href="#" className="nav-link" id="pills-Destinations-tab" data-bs-toggle="pill" data-bs-target="#pills-Destinations" type="button" role="tab" aria-controls="pills-Destinations" aria-selected="false"> <img src="desti.png" className="img-fluid" alt="..."/> Destinations  &nbsp;&nbsp; ></a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a href="#" className="nav-link" id="pills-Hotels-tab" data-bs-toggle="pill" data-bs-target="#pills-Hotels" type="button" role="tab" aria-controls="pills-Hotels" aria-selected="false"> <img src="hotels.png" className="img-fluid" alt="..."/> Hotels  &nbsp;&nbsp; ></a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a href="#" className="nav-link " id="pills-About-tab" data-bs-toggle="pill" data-bs-target="#pills-About" type="button" role="tab" aria-controls="pills-About" aria-selected="false"><img src="about.png" className="img-fluid" alt="..."/> About Us  &nbsp;&nbsp; ></a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a href="#" className="nav-link" id="pills-Extras-tab" data-bs-toggle="pill" data-bs-target="#pills-Extras" type="button" role="tab" aria-controls="pills-Extras" aria-selected="false"><img src="holiday.png" className="img-fluid" alt="..."/> Holiday Extras  &nbsp;&nbsp; ></a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a href="#" className="nav-link" id="pills-Social-tab" data-bs-toggle="pill" data-bs-target="#pills-Social" type="button" role="tab" aria-controls="pills-Social" aria-selected="false"><img src="Social.png" className="img-fluid" alt="..."/> Social  &nbsp;&nbsp; ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-9">
                    <div className="tab-content mt-2 p-3" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-Holidays" role="tabpanel" aria-labelledby="pills-Holidays-tab">
                        <div className="row">
                          <div className="col-md-4">
                            <h4 className="mb-4">Featured Holidays</h4>
                            <img src="layer123.png" className="mt-2 mb-2" height="111px" width="80%" alt="..."/>
                            <ul className="list-group list-group-flush first-list">
                              <li className="list-group-item"> <a href="#">Holidays to Greecs & Cyprus  </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4 holi">Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">All-inclusive Holidays </a></li>
                              <li className="list-group-item"><a href="#">Beach Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Family Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> Adult Holidays </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">Balaerics Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Canaries Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Spain Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> USA Holidays  </a></li>
                            </ul>
                          </div>
                        </div>

                        <div className="text-right">
                          <ul className="list-group list-group-flush ">
                            <li className="list-group-item"><a href="#"> ALL HOLIDAYS   </a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-Destinations" role="tabpanel" aria-labelledby="pills-Destinations-tab">
                        <div className="row">
                          <div className="col-md-4">
                            <h4 className="mb-4">Featured Holidays</h4>
                            <img src="layer123.png" className="mt-2 mb-2" height="111px" width="80%" alt="..."/>
                            <ul className="list-group list-group-flush first-list">
                              <li className="list-group-item"> <a href="#">Holidays to Greecs & Cyprus  </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4 holi">Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">All-inclusive Holidays </a></li>
                              <li className="list-group-item"><a href="#">Beach Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Family Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> Adult Holidays </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">Balaerics Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Canaries Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Spain Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> USA Holidays  </a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="text-right">
                          <ul className="list-group list-group-flush ">
                            <li className="list-group-item"><a href="#"> ALL HOLIDAYS   </a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-Hotels" role="tabpanel" aria-labelledby="pills-Hotels-tab">
                        <div className="row">
                          <div className="col-md-4">
                            <h4 className="mb-4">Featured Holidays</h4>
                            <img src="layer123.png" className="mt-2 mb-2" height="111px" width="80%" alt="..."/>
                            <ul className="list-group list-group-flush first-list">
                              <li className="list-group-item"> <a href="#">Holidays to Greecs & Cyprus  </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4 holi">Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">All-inclusive Holidays </a></li>
                              <li className="list-group-item"><a href="#">Beach Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Family Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> Adult Holidays </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">Balaerics Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Canaries Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Spain Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> USA Holidays  </a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="text-right">
                          <ul className="list-group list-group-flush ">
                            <li className="list-group-item"><a href="#"> ALL HOLIDAYS   </a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-About" role="tabpanel" aria-labelledby="pills-About-tab">
                        <div className="row">
                          <div className="col-md-4">
                            <h4 className="mb-4">Featured Holidays</h4>
                            <img src="layer123.png" className="mt-2 mb-2" height="111px" width="80%" alt="..."/>
                            <ul className="list-group list-group-flush first-list">
                              <li className="list-group-item"> <a href="#">Holidays to Greecs & Cyprus  </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4 holi">Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">All-inclusive Holidays </a></li>
                              <li className="list-group-item"><a href="#">Beach Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Family Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> Adult Holidays </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">Balaerics Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Canaries Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Spain Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> USA Holidays  </a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="text-right">
                          <ul className="list-group list-group-flush ">
                            <li className="list-group-item"><a href="#"> ALL HOLIDAYS   </a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-Extras" role="tabpanel" aria-labelledby="pills-Extras-tab">
                        <div className="row">
                          <div className="col-md-4">
                            <h4 className="mb-4">Featured Holidays</h4>
                            <img src="layer123.png" className="mt-2 mb-2" height="111px" width="80%" alt="..."/>
                            <ul className="list-group list-group-flush first-list">
                              <li className="list-group-item"> <a href="#">Holidays to Greecs & Cyprus  </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4 holi">Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">All-inclusive Holidays </a></li>
                              <li className="list-group-item"><a href="#">Beach Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Family Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> Adult Holidays </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">Balaerics Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Canaries Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Spain Holidays </a></li>
                             <li className="list-group-item last"><a href="#"> USA Holidays  </a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="text-right">
                          <ul className="list-group list-group-flush ">
                            <li className="list-group-item"><a href="#"> ALL HOLIDAYS   </a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-Social" role="tabpanel" aria-labelledby="pills-Social-tab">

                        <div className="row">
                          <div className="col-md-4">
                            <h4 className="mb-4">Featured Holidays</h4>
                            <img src="layer123.png" className="mt-2 mb-2" height="111px" width="80%" alt="..."/>
                            <ul className="list-group list-group-flush first-list">
                              <li className="list-group-item"> <a href="#">Holidays to Greecs & Cyprus  </a></li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4 holi">Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">All-inclusive Holidays </a></li>
                              <li className="list-group-item"><a href="#">Beach Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Family Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> Adult Holidays </a></li>

                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item first"><a href="#">Balaerics Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Canaries Holidays  </a></li>
                              <li className="list-group-item"><a href="#">Spain Holidays </a></li>
                              <li className="list-group-item last"><a href="#"> USA Holidays  </a></li>

                            </ul>
                          </div>
                        </div>

                        <div className="text-right">
                          <ul className="list-group list-group-flush ">
                            <li className="list-group-item"><a href="#"> ALL HOLIDAYS   </a></li>
                          </ul>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default header
