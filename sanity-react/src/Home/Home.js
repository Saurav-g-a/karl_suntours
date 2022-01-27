import React from 'react';
import "./Home.css"
import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
function Home() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }
  const [counter1, setCounter1] = useState(1);
  const incrementCounter1 = () => setCounter1(counter1 + 1);
  let decrementCounter1 = () => setCounter1(counter1 - 1);
  if(counter1<=1) {
    decrementCounter1 = () => setCounter1(1);
  }
  const [counter2, setCounter2] = useState(1);
  const incrementCounter2 = () => setCounter2(counter2 + 1);
  let decrementCounter2 = () => setCounter2(counter2 - 1);
  if(counter2<=1) {
    decrementCounter2 = () => setCounter(1);
  }
  function toggleNumbers(){
    console.log('here')
    var x = document.getElementById("filterss");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function open(){
    console.log('here1')
    var x = document.getElementById("dates");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function toggleNumbers1(){
    console.log('here')
    var x = document.getElementById("filterss1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function toggleNumbers2(){
    console.log('here')
    var x = document.getElementById("filterss2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function toggleNumbers3(){
    console.log('here')
    var x = document.getElementById("Destination");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function toggleNumbers4(){
    console.log('here')
    var x = document.getElementById("flight");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function toggleNumbers5(){
    console.log('here')
    var x = document.getElementById("Airport");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
    return (
    <section>
        <div className="banner pt-5">
           <div className=" narrow">
              
    


                      
                       <div className="tabs mt-5">
                        
                      <div className="container">
                      
                       <ul className="nav nav-tabs custom_tab_style1" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Profile" type="button" role="tab" aria-controls="home" aria-selected="true">Flight + Hotel</button>
                            </li>
                            <li className="nav-item" role="presentation">
                            <button className="nav-link" id="flight-tab" data-bs-toggle="tab" data-bs-target="#Flight" type="button" role="tab" aria-controls="flight" aria-selected="false">Hotels</button>
                            </li>
                        </ul>
                        </div>
                        
                        <div className="tab-content" id="myTabContent">
                          
                           {/*------------------ Package Holidays section---------------------- */}
                            <div className="tab-pane fade show active" id="Profile" role="tabpanel" aria-labelledby="home-tab">
                            <div className="container">
                             <div className="flighttabs">
                                 <form>
                               <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label >Destination(s) or Hotel Name</label>
                                            <div className="input-group mb-3">

                                            <input type="text" className="form-control" />
                                            <button className="btn btn-secondary " onClick={toggleNumbers3}  type="button"><img src="desti.png" alt="..."/><p>list</p></button>
                                          </div>
                                         
                                        </div>
                                        <div className="suggection " id="Destination"   style={{display:'none'}}>
                                        <div className="flush"></div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any Destination</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Mediterranean</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Canary Islands</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Greek Islands</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Balearic Islands</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Africa</li>
                                          </ul>
                                        </div>
                                      </div>
                                    
                                      <div className="col-md-2">
                                        <div className="form-group">
                                            <label >Departure Airport</label>
                                            <div className="input-group mb-3">
                                            <input type="text" className="form-control" />
                                            <button className="btn btn-secondary " onClick={toggleNumbers5}  type="button"><i className="fa fa-plane"></i></button>
                                            </div>
                                        </div>
                  
                                        <div className="suggection1 " id="Airport"  style={{display:'none'}}>
                                        <div className="flush"></div>
                                          <ul className="list-group list-group-flush">
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any London Airport</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any Midlands Airport</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any North East Airport</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any North West Airport</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any Scotland Airport</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any South West Airport</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div className="form-group">
                                            <label >Departure Date</label>
                                            <div className="input-group mb-3">

                                            <input type="date" className="form-control" readOnly onClick={open}/>
                                            <button className="btn btn-secondary "  onClick={open}  type="button">  <img  src="Calendar.png" alt="..."/></button>

                                            </div>
                                            
                                          
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div className="form-group">
                                            <label >Duration</label>
                                            
                                            <select className="form-select" id="inputGroupSelect01">
                                                <option selected>7 Nights</option>
                                                <option value="1">1 Night</option>
                                                <option value="2"> 2 Nights</option>
                                                <option value="3">3 Nights</option>
                                                <option value="4"> 4 Nights</option>
                                                <option value="5"> 5 Nights</option>
                                                <option value="6"> 6 Nights</option>
                                                <option value="8"> 8 Nights</option>
                                                <option value="9"> 9 Nights</option>
                                                <option value="10"> 10 Nights</option>
                                                <option value="11">11 Nights</option>
                                                <option value="12"> 12 Nights</option>
                                                <option value="13">13 Nights</option>
                                                <option value="14"> 14 Nights</option>
                                                
                                            </select>
                                        </div>
                                      </div>
                                    
                                       <div className="col-md-2">
                                       <div className="form-group">
                                        
                                           <label>Rooms & Guests</label>
                                           <div className="input-group mb-3">


                                        <input type="text" className="form-control" />
                                        <button className="btn btn-secondary " onClick={toggleNumbers}  type="button"><img src="rome.png" alt="..."/></button>
                                     
                                        </div>
                                       
                                         </div>
                                       </div>
                                      
                                       
                                      <div className="col text-center">
                                        <div className="form-group">
                                            <label ></label><br/>
                                            <button className="btn btn-primary form-control" style={{height:"60px"}} type="button">Search </button>
                                        </div>
                                      </div>
                                   </div>
                                  
                                  
                                           <div className="filterss1" tabIndex="-1" id="filterss" style={{display:'none'}}>
                                                  <div className="">
                                                    <div className="modal-content">
                                                      <div className="modal-header">
                                                        <h5 className="modal-title text-dark">Holidays</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleNumbers}></button>
                                                      </div>
                                                      <div className="modal-body text-dark">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                              <label>Number of rooms</label>
                                                                <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>I don't mind</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                </select>
                                                              </div>
                                                              <div className="col-md-2">
                                                              <label>Adults</label>
                                                                <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                </select>

                                                                </div>
                                                                <div className="col-md-2">
                                                                <label>Children (0-17)</label>
                                                                <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>

                                                                </div>
                                                          </div>
                                                          <div className="row">
                                                               <div className="col-md-4"></div>
                                                               <div className="col-md-4 mt-3">
                                                                 <p>Child ages</p>
                                                                 <p>Please enter the ages of the children travelling (0 -17) on return date </p>
                                                                 <div className="row">
                                                                      <div className="col-md-4">
                                                                      <label>Child 1</label>
                                                                      <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                        <label>Child 2</label>
                                                                      <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                   </div>
                                                               </div>
                                                            </div>
                                                      </div>
                                                      <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleNumbers}>Clear All</button>
                                                        <button type="button" className="btn btn-primary">Done</button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                 

                                               




                                           </form>
                                           </div>
                                         
                                </div></div>
              
                                 {/*------------------ hotals section---------------------- */}
                                 <div className="tab-pane fade " id="Flight" role="tabpanel" aria-labelledby="flight-tab">
                                  <div className="container">
                                 <div className="flighttabs">
                                 <form>
                               <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label >Destination(s) or Hotel Name</label>
                                             <div className="input-group mb-3">

                                            <input type="text" className="form-control" />
                                            <button className="btn btn-secondary " onClick={toggleNumbers4}  type="button"><img src="desti.png" alt="..."/><p>list</p></button>
                                          </div>
                                            <div className="suggection3 " id="flight"  style={{display:'none'}}>
                                        <div className="flush1"></div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any Destination</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Mediterranean</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Canary Islands</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Greek Islands</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Balearic Islands</li>
                                            <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Africa</li>
                                          </ul>
                                        </div>
                                        </div>
                                      </div>
                                     
                                      <div className="col-md-3">
                                        <div className="form-group">
                                            <label >Check-in / Check-out</label>
                                            <div className="input-group mb-3">
                                            <input type="date" className="form-control" readOnly onClick={open}/>
                                            <button className="btn btn-secondary "  onClick={open}  type="button">  <img  src="Calendar.png" alt="..."/></button>
                                            </div>
                                        
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                       <label >Rooms & Guests</label>
                                       <div className="input-group mb-3">
                                        <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                                        <button className="btn btn-secondary" type="button" onClick={toggleNumbers2}><img src="rome.png" alt="..."/></button>
                                      </div>
                                       </div>
                                      <div className="col-md-2 text-center">
                                        <div className="form-group">
                                            <label ></label><br/>
                                            <button className="btn btn-primary" style={{height:'60px'}}type="button">Search &nbsp;&nbsp; > </button>
                                        </div>
                                      </div>
                                   </div>
                                  
                                
                                           <div className="filterss1" tabIndex="-1" id="filterss2" style={{display:'none'}}>
                                                  <div className="">
                                                    <div className="modal-content">
                                                      <div className="modal-header">
                                                        <h5 className="modal-title text-dark">Hotals</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleNumbers2}></button>
                                                      </div>
                                                      <div className="modal-body text-dark">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                              <label>Number of rooms</label>
                                                                <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>I don't mind</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                </select>
                                                              </div>
                                                              <div className="col-md-2">
                                                              <label>Adults</label>
                                                                <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                </select>

                                                                </div>
                                                                <div className="col-md-2">
                                                                <label>Children (0-17)</label>
                                                                <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>

                                                                </div>
                                                          </div>
                                                          <div className="row">
                                                               <div className="col-md-4"></div>
                                                               <div className="col-md-4 mt-3">
                                                                 <p>Child ages</p>
                                                                 <p>Please enter the ages of the children travelling (0 -17) on return date </p>
                                                                 <div className="row">
                                                                      <div className="col-md-4">
                                                                      <label>Child 1</label>
                                                                      <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                        <label>Child 2</label>
                                                                      <select className="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                   </div>
                                                               </div>
                                                            </div>
                                                      </div>
                                                      <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleNumbers2}>Clear All</button>
                                                        <button type="button" className="btn btn-primary">Done</button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                         
                                           </form>
                                           </div>
                                 </div>
                               
         </div>
                     
                       <div className="filterss" tabIndex="-1" id="dates"  style={{display:'none'}} >
                                                  <div className="">
                                                    <div className="modal-content">
                                                      <div className="modal-header">
                                                        <h5 className="modal-title text-dark">Date</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={open} ></button>
                                                      </div>
                                                      <div className="modal-body text-dark">
                                                       <div className="row">
                                                            <div className="col-md-8">
                                                            <Calendar />
                                                              </div>
                                                              <div className="col-md-4 dayss">
                                                                <h4>How flexible</h4>
                                                                <div className="mb-3 form-check">
                                                                      <input type="radio" className="form-check-input" name="day" />
                                                                      <label className="form-check-label" htmlFor="exampleCheck1">Not Flexible</label>
                                                                    </div>
                                                                    <div className="mb-3 form-check">
                                                                      <input type="radio" className="form-check-input" name="day"/>
                                                                      <label className="form-check-label" htmlFor="exampleCheck1">+/- 3 Days</label>
                                                                    </div>
                                                                    <div className="mb-3 form-check">
                                                                      <input type="radio" className="form-check-input"name="day"/>
                                                                      <label className="form-check-label" htmlFor="exampleCheck1">+/- 7 Days  </label>
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
        <div className="Hello">
           <div className="container">
           <div className="row">
             <div className="col-md-6"></div>
             <div className="col-md-1"></div>
                       <div className="col-md-4">
                           <div className="summer-text">
                           <img src="smile.png" alt="..."/>
                             <h3 className="mb-3">Hello Holidays</h3>
                            
                             
                               
                             <p className="mb-3"><span className="redcolor">Save up to £750 per person </span> on 
                                  selected holidays to <span className="redcolor">Greece </span>,<span className="redcolor"> Spain </span>, 
                                  <span className="redcolor">Portugal </span> & <span className="redcolor">Italy </span>.
                                  <br/><br/>
                                  Great deals, with a price match 
                                  promise &<span className="redcolor"> deposits from £30 </span>, say 
                                  hello to holidays that make you smile.</p>
                                  <div className="text-right">
                                  <button className="btn btn-danger btn-lg" type="button">Search deals &nbsp;&nbsp; > </button>                             </div>
                         </div>
                         </div>
                         <div className="col-md-1"></div>
                      </div>
             </div>
          </div>
          </div>
        <div className="content text-center">
            <div className="container">
                   <div className="row">
                 <div className="col-md-4 my-3">
                      <p><i className="fa fa-star" style={{color: '#46b946'}}></i> Trustpilot</p>
                      <div className="stars">
                      <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                        </div>
                     </div>
                     <div className="col-md-4 my-3 d-flex">
                     <img src="footer.png" width="50px" height="50px" className="mr-3" alt="..."/>
                     <p style={{textAlign:"left",marginLeft: '10px'}}> ATOL  <br/>Protected</p>
                  </div>
                  <div className="col-md-4 my-3 d-flex">
                  <i className="fa fa-check-circle"></i>
                   <p style={{textAlign:"left"}}>Deposits from <br/> £30</p>
                  </div>
               </div>
               </div>
           </div>
           
               {/* second Section */}
              
               <div className="container">
                 <h3  className="my-5">I am looking for...?</h3>
                  <div className="row">
                    <div className="col-md-6">
                        <div className="family">
                        <div className="bannerpack">
                                <h3>Family Holidays </h3>
                             </div>
                         <div className="overlay1">
                         
                           <div className="row">
                             <div className="col-md-7 col-7">
                             <p>last minute deals <br/>
                                from £129 per person</p>
                             </div>
                              <div className="col-md-5 mt-3 col-5 text-right">
                                <button className="btn btn-primary" type="button">Search Deals
                                  </button>
                              </div>
                           </div>
                           </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                        <div className="flight">
                      <div className="bannerpack">
                                <h3>Flights  </h3>
                             </div>
                             </div>
                       
                        </div>
                        <div className="col-md-4">
                            <div className="holiday">
                            <div className="bannerpack">
                                <h3>All Inclusive Holidays   </h3>
                             </div>
                                <div className=" overlay2 text-right">
                                   <button className="btn btn-primary" type="button">
                                   Search Deals
                                   </button>
                                  </div>
                              </div>
                          </div>
                    </div>
               </div>
               <div className="container">
                 <h3 className="my-5">Featured Destinations</h3>
                 <div className="row">
                   <div className="col-md-8 overhead">
                       <img src="Layer4.png" className="img-fluid w-100" alt="..."/>
                       <div className="over1">
                          <h3>Holidays to Greece & cyprus</h3>
                          <p>Amazing deals on all-inclusive holidays with<br/>
                              up to £750 off per couple and<br/>
                              1000’s of free kid’s places</p>
                              
                               <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; > </button>
                               
                         </div>
                     </div>
                     <div className="col-md-4 overhead">
                     <img src="Layer3.png" className="img-fluid w-100" alt="..."/>
                     <div className="over">
                      <h3>Italy & the lakes</h3>
                      <p>Culture, beauty, beaches & sights<br/>
                          From Italy with love...</p>
                          <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; > </button>
                               
                         </div>
                       </div>
                       </div>
                  
                   <div className="row my-2">
                  
                     <div className="col-md-4 overhead">
                     <img src="Layer1.png" className="img-fluid w-100" alt="..."/>
                     <div className="over">
                      <h3>Carribean</h3>
                      <p>Shimmering reefs, spicy salsa, reggae,<br/> pirate hideouts to sugar sand beaches</p>
                      <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; > </button>
                               
                         </div>
                     </div>
                      
                       <div className="col-md-8 overhead">
                       <img src="Layer2.png" className="img-fluid w-100" alt="..."/>
                       <div className="over1">
                          <h3>Holidays to the Balearic Islands</h3>
                          <p>Majorca, Ibiza & Menorca. Beautiful coves<br/>
                            & historic old towns make<br/> these Islands the perfect getaway</p>
                            <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; > </button>
                               
                         </div>
                     </div>
                 
                   </div>
                   </div>
                   <div className="container my-4 ">
                   <h3 className="my-3">Package Holiday Deals</h3>
                   <div className="row">
                       <div className="col-md-4">
                          <div className="hotals">
                           
                         
                          <div className="overlay">
                                 <div className="row p-2">
                                    <div className="col-md-8 col-8">
                                    <h5>Miami, FL</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p> <span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>Sunny Isles Beach, FL<br/> Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-md-4 col-4 text-right">
                                            <h3><span className="youro">£</span> 329</h3>
                                            <div className="text-right mt-4">
                                          
                                              <p>   <i className="fa fa-plane"></i> Delta</p>
                                            </div>
                                            </div>    
                                 </div>
                                 <div className="row red">
                                    <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                      <button className="btn form-control ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-md-6 col-6 "  style={{padding:'0px'}}>
                                        <button className="btn btn-primary form-control">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                                     </div>
                                
                              </div>
                           </div>
                           <div className="col-md-4">
                           <div className="hotals">
                           <div className="overlay">
                                 <div className="row p-2">
                                    <div className="col-md-8 col-8">
                                    <h5>Miami, FL</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>Sunny Isles Beach, FL<br/> Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-md-4 col-4 text-right">
                                            <h3><span className="youro">£</span> 329</h3>
                                            <div className="text-right mt-4">
                                            
                                              <p> <i className="fa fa-plane"></i> Delta</p>
                                            </div>
                                            </div>    
                                 </div>
                                 <div className="row red">
                                    <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                      <button className="btn form-control red">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                        <button className="btn btn-primary form-control">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                              
                                 </div>
                              </div>
                        </div>
                        <div className="col-md-4">
                        <div className="hotals">
                             <div className="overlay">
                                 <div className="row p-2">
                                    <div className="col-md-8 col-8">
                                    <h5>Miami, FL</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p><span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>Sunny Isles Beach, FL<br/> Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-md-4 col-4 text-right">
                                            <h3><span className="youro">£</span> 329</h3>
                                            <div className="text-right mt-4">
                                           
                                              <p>  <i className="fa fa-plane"></i>Delta</p>
                                            </div>
                                            </div>    
                                 </div>
                                 <div className="row red">
                                    <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                      <button className="btn form-control ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                        <button className="btn btn-primary form-control">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                              
                                 </div>
                              </div>
                        </div>
                       </div>
               </div>
                  
                  <div className="summer">
                    <div className="container">
                    <div className="row">
                      <div className="col-md-1"></div>
                       <div className="col-md-5">
                           <div className="summer-text">
                             <h3 className="mb-5">Book now for Summer 2022</h3>
                             <p className="mb-5">With our safe booking policy, it’s now even more secure to book your 2022 holidays.
                                  <br/><br/>
                                  Search now and secure your next holiday with low deposits starting from £30 per person.</p>
                                  <button className="btn btn-primary btn-lg" type="button">Search Holidays &nbsp;&nbsp; > </button>                             </div>
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <h3 className="my-3 px-4">Popular Destinations</h3>
                    <div className="row text-darkblue">
                       <div className="col-md-3 px-5">
                         <p><a href="">Ibiza </a><br/>
                         <a href="#"> Majorca</a><br/>
                         <a href="#">Crete</a><br/>
                         <a href="#"> Cyprus</a><br/>
                         <a href="#"> Portugal</a><br/>
                         <a href="#"> Turkey</a><br/>
                         <a href="#"> Greece</a><br/>
                         <a href="#"> Zante</a>
                            </p>
                         </div>
                         <div className="col-md-3 px-5">
                         <p><a href="">Ibiza</a><br/>
                         <a href="#"> Majorca</a><br/>
                         <a href="#"> Crete</a><br/>
                         <a href="#">Cyprus</a><br/>
                         <a href="#">Portugal</a><br/>
                         <a href="#"> Turkey</a><br/>
                         <a href="#">Greece</a><br/>
                         <a href="#"> Zante</a>
                            </p>
                         </div>
                         <div className="col-md-3 px-5">
                         <p><a href="">Ibiza</a><br/>
                         <a href="#"> Majorca</a><br/>
                         <a href="#"> Crete</a><br/>
                         <a href="#"> Cyprus</a><br/>
                         <a href="#">  Portugal</a><br/>
                         <a href="#"> Turkey</a><br/>
                         <a href="#"> Greece</a><br/>
                         <a href="#">  Zante</a>
                            </p>
                         </div>
                         <div className="col-md-3 px-5">
                         <p><a href="">Ibiza</a><br/>
                         <a href="#">Majorca</a><br/>
                         <a href="#">Crete</a><br/>
                         <a href="#">Cyprus</a><br/>
                         <a href="#">Portugal</a><br/>
                         <a href="#">Turkey</a><br/>
                         <a href="#">Greece</a><br/>
                         <a href="#">Zante</a>
                            </p>
                         </div>
                      </div>
                  </div>
                     
                     <div className="Contacting">
                  <div className="container">
                    <div className="row last-section py-4">
                        <div className="col-md-4 px-5">
                         <h4 className="my-3">Contacting us by Email</h4>
                         <p><b>Send us an email with any non-
                              urgent questions. We respond 
                              to inquiries within 48 hours.</b></p>
                              <form>
                              <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Name" />
                              </div>
                              <div className="mb-3">
                                
                                <input type="email" className="form-control" placeholder="Email"/>
                              </div>
                              <div className="mb-3">
                                
                                <input type="text" className="form-control" placeholder="Booking Reference"/>
                              </div>
                              <div className="mb-3">
                                
                              <textarea className="form-control" placeholder="Question" rows="3"></textarea>
                              </div>
                              <div className="mb-3 text-right">
                               <p>All Fields are Required! <button type="submit" className="btn btn-primary">Send</button></p>
                              
                              </div>
                            </form>
                          </div>
                          <div className="col-md-4 px-5">
                              <h4 className="my-3">Contacting us by Phone</h4>
                              <p><b>For urgent assistance please call
                                      our 24hr helpline, please have 
                                      your booking reference to hand.</b></p>
                                <p><b>Call us 24 hours a day, <br/>
                                    7 days a week</b></p>
                                    <h3>0800-200-9900</h3>
                                    <p>Toll-free UK</p>
                                    <hr/>
                                    <h3>020-200-2000</h3>
                                    <p>Outside the UK</p>
                                    <div className="float-right">
                                     <img src="chat.png" width="50px" height="50px" alt="..."/>
                                      </div> 
                                    <a href="#">Chat with us online</a>
                            </div>
                            <div className="col-md-4 px-5">
                              <h4 className="text-center my-3">Ask a Question?</h4>
                              <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                              </form>
                              <ul className="list-group my-4">
                                <li className="list-group-item"> <a href="#">Airline Baggage Fees</a></li>
                                <li className="list-group-item"><a href="#">Online Flight Check-in</a></li>
                                <li className="list-group-item"><a href="#">Covid 19 Travel Advisories</a></li>
                                <li className="list-group-item"><a href="#">Cancellation Policy</a></li>
                                <li className="list-group-item"><a href="#">Airport Security</a></li>
                              </ul>
                              </div>
                      </div>
                  </div>
                  </div>
                  
     

        </section>
    )
}

export default Home
