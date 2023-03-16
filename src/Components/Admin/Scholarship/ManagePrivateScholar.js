import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
import AdminPopup from "../AdminPopup";
import "../../CSS/Demographic.css"

function ManagePrivateScholarship() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const togglePopup1 = () => {
        setIsOpen1(!isOpen1);
      }
  return (
    <>
    <AdminNavbar/>
    <AdminSidebar/>

    <div className=" mt-5 ">
    <div class="Head">
	    <div class="overlay">
        <h1 className="fw-bold fs-1 text-uppercase">Manage private Scholarship</h1>
      </div>
    </div>
    </div>
    <div className="container mt-5 py-5 shadow-lg ">
        <div>
            <div className="d-flex justify-content-end mb-5">
                <Link  onClick={togglePopup1} className="btn btn-success py-2"><i class="bi bi-plus fs-6"></i> Add Scholarship</Link>

            </div>
            <ol>

                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>EHSAAS UNDERGRADUATE SCHOLARSHIP PROGRAMME</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>                            

                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>SCOTLAND PAKISTAN SCHOLARSHIPS FOR YOUNG WOMEN AND GIRLS</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>

                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>USAID-FUNDED MERIT AND NEEDS-BASED SCHOLARSHIP PROGRAMME</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>

                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>OGDCL NEED-BASED SCHOLARSHIPS PROGRAM THROUGH HEC</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>
                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>PAKISTAN BAIT-UL-MAL SCHOLARSHIP FOR DESERVING STUDENTS</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>


            </ol>
        </div>

    </div>

    {isOpen && <AdminPopup
      content={<>
        
        <div class="ms-5  pb-1  col-md-11 shadow-lg">        
        <form>
            <div class="p-3">
            <div class="ribbon786 mb-2 ">
               <span class="ribbonadd2 ps-4">Update Scholarship</span>
           </div>

           <div class="d-flex flex-column mb-3">
                <label class="labels">Add Photo</label>
                <input type="file"></input>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Scholarship Name</label><input type="text" class="form-control" placeholder="Enter Scholarship Name" value=""/></div>
                    <div class="col-md-6"><label class="labels">Provide Link</label><input type="text" class="form-control" placeholder="Enter URL" value=""/></div>
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Description</label><textarea  type="text" class="form-control" placeholder="Description" value=""/></div>
                    <div class="col-md-6 mt-3"><label class="labels">City</label><input type="text" class="form-control" placeholder="City"  required/></div>
                    
                </div>
               
            </div>            

            <div class="my-3 text-center"><button class="btn btn-primary profile-button" type="submit">Update Scholarship</button></div>
               
            </form>


        </div>

      </>}
      handleClose={togglePopup}
    />}

{isOpen1 && <AdminPopup
      content={<>
        
        <div class="ms-5 mt-3 pb-1  col-md-10 shadow-lg">        
        <form>
            <div class="p-3">
            <div class="ribbon786 mb-2">
               <span class="ribbonadd2">Add Scholarship</span>
           </div>
           <div class="d-flex flex-column mb-3">
                <label class="labels">Add Photo</label>
                <input type="file"></input>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Scholarship Name</label><input type="text" class="form-control" placeholder="Enter Scholarship Name" value=""/></div>
                    <div class="col-md-6"><label class="labels">Provide Link</label><input type="text" class="form-control" placeholder="Enter URL" value=""/></div>
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Description</label><textarea  type="text" class="form-control" placeholder="Description" value=""/></div>
                    <div class="col-md-6 mt-3"><label class="labels">City</label><input type="text" class="form-control" placeholder="City"  required/></div>
                    
                </div>
               
            </div>            

            <div class="my-3 text-center"><Link class="btn btn-primary profile-button" type="submit">Add Scholarship</Link></div>
               
            </form>


        </div>

      </>}
      handleClose={togglePopup1}
    />}
    </>
  );
}

export default ManagePrivateScholarship;