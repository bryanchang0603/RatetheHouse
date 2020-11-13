import React, { Component } from 'react';
import { Card, CardImg, Button } from 'react-bootstrap';
import './PeopleCard.css';
// import Rating from '@material-ui/lab/Rating';
// import Bar from './star';



class PeopleCard extends Component
{
  render()
  {
    return( // left paren has to go there otherwise it'll fail out
      <div>
        <Table1/>
        <Table2/> 

      </div>
    );
  }
}



class Table1 extends Component {

  render () {
    // let { id, address, description,image } = this.props.person;
    return (

      // <div class="rating"> <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label>
      // </div>

    <React.Fragment>
    <div>
        <div class="table1">
            {/* <div class="container"> */}
            <div class="table-wrapper">

                {/* <div class="table-title"> */}
                <div class="row">
                    <div class="col-sm-8"><h2>149 Main Street</h2></div>
                    <div><img src= "/photos/house1.jpg"></img></div> 
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i>Write a Review</button>
                    </div>
                {/* </div> */}
                {/* </div> */}

                <table class="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Review</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2020-07-09</td>
                            <td>Morgan</td>
                            <td>The landlord is really nice...</td>
                            <td>
                                <a class="add" title="Add" ><i class="material-icons">&#xE03B;</i></a>
                                <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                                <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>2020-08-09</td>
                            <td>Peter</td>
                            <td>A good place to live...</td>
                        </tr>
                    </tbody>
                </table>


        
                </div>
            </div>
        </div>

    </div>
    </React.Fragment>

    )
  }
}



class Table2 extends Component {

    render () {
        
      // let { id, address, description,image } = this.props.person;
      return (
  
        // <div class="rating"> <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label>
        // </div>
  
      <React.Fragment>
      <div>
          <div class="table1">
              {/* <div class="container"> */}
              <div class="table-wrapper">
  
                  {/* <div class="table-title"> */}
                  <div class="row">
                      <div class="col-sm-8"><h2>149 Main Street</h2></div>
                      <div><img src= "/photos/house1.jpg"></img></div> 
                      <div class="col-sm-4">
                          <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i>Write a Review</button>
                      </div>
                  {/* </div> */}
                  {/* </div> */}
  
                  <table class="table">
                  
                      <thead>
                          <tr>
                              <th>Date</th>
                              <th>Name</th>
                              <th>Review</th>
                              <th> </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>2020-07-09</td>
                              <td>Morgan</td>
                              <td>The landlord is really nice...</td>
                              <td>
                                  <a class="add" title="Add" ><i class="material-icons">&#xE03B;</i></a>
                                  <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                                  <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                              </td>
                          </tr>
                          <tr>
                              <td>2020-08-09</td>
                              <td>Peter</td>
                              <td>A good place to live...</td>
                          </tr>
                      </tbody>
                  </table>
  
  
          
                  </div>
              </div>
          </div>
  
      </div>
      </React.Fragment>
  
      )
    }
  }


export default PeopleCard;
