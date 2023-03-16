import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
// import { quiz } from '../../../Components/';
import {Personalityquiz } from "./Question";
import AdminPopup from "../AdminPopup";
import "../../CSS/Demographic.css"

function Personality() {
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
        <h1 className="fw-bold fs-1 text-uppercase">Manage Personality</h1>
      </div>
    </div>
    </div>
    <div className="container mt-5 py-5 shadow-lg ">
        <div>
            <div className="d-flex justify-content-end mb-5">
                <Link  onClick={togglePopup1} className="btn btn-success py-2"><i class="bi bi-plus fs-6"></i> Add Questions</Link>

            </div>
            <ol>
                {
                    Personalityquiz.questions.map((q)=>(
                <li className="d-flex border rounded-2 justify-content-between shadow-sm mt-3 px-4 py-2">
                    
                    <div className="col-9">

                      <p>{q.question}</p>                        
                    </div>

                    <div className="d-flex justify-content-end col-1">
                        <Link onClick={togglePopup}><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5"></i></Link>
                    </div>

                </li>                            
                        )
                    )

                }
                <li className="d-flex  rounded-2  shadow-sm mt-3 px-4 py-3 showhover">

                    <p className="mb-0">School/College</p>
                      <div className=" hidehover">
                        <Link><i class="bi bi-pencil-square fs-5 "></i></Link>
                        <Link className="ms-4"><i class="bi bi-trash fs-5 "></i></Link>
                    </div>                        



                </li>
            </ol>
        </div>

    </div>

    {isOpen && <AdminPopup
      content={<>
        
        <div class="ms-5 mt-3 pb-1  col-md-10 shadow-lg">        
        <form>
            <div class="p-3">
            <div class="ribbon786 ">
               <span class="ribbonadd2">Update Question</span>
           </div>
                <div class="row mt-2">
                    <div class="col-md-12"><label class="labels">Question</label><textarea rows="2" cols="" type="text" class="form-control" placeholder="Enter Question" value=""></textarea></div>
                    
                </div>
               
            </div>            

            <div class="my-5 text-center"><button class="btn btn-primary profile-button" type="submit">Update Question</button></div>
               
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
            <div class="ribbon786 ">
               <span class="ribbonadd2">Add Question</span>
           </div>
                <div class="row mt-2">
                    <div class="col-md-12"><label class="labels">Question</label><textarea rows="2" cols="" type="text" class="form-control" placeholder="Enter Question" value=""></textarea></div>
                    
                </div>
               
            </div>            

            <div class="my-5 text-center"><Link class="btn btn-primary profile-button" type="submit">Add Question</Link></div>
               
            </form>


        </div>

      </>}
      handleClose={togglePopup1}
    />}
    </>
  );
}

export default Personality;