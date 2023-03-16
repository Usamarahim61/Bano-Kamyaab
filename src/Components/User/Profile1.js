import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Profile.css"
import Navbar1 from "../Navbar1";
import Sidebar from "../Sidebar";

function Profile1() {
    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();

    const handleClick = event => {

      setIsShown(current => !current);
  

    };

    const [userdata,setUserdata]= useState({});

    const callProfile = async ()=>{
        try{

            // return fetch("/UserProfile")
            // .then((response) => response.json())
            // .then((data) => setUserdata(data));
            const res =await fetch('/UserProfile', {
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            
            setUserdata(data);


            if(!res.status ===200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){

            console.log(err);
            navigate ("/Login");

        }
    }

    useEffect(()=>{
        callProfile();
    }, []);
    
  return (
    <>
    <Navbar1/>
    <Sidebar/>
    <div className="container rounded bg-white mt-5 mb-5">
            <form method = "GET">
                <div className="row">


        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">{userdata.name}</span><span className="text-black-50">{userdata.email}</span>
            {/* <p type="file" className="form-control" value="">dfds</p> */}
            </div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 pt-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                    <Link to="/EditProfile" className="btn btn-success">Edit Profile</Link>
                </div>
                <div className="row ">
                    <div className="col-md-12"><label className="labels">Name</label><p type="text" className="form-control" placeholder="Name" value="">{userdata.name}</p></div>
                    
                </div>
                <div className="row ">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><p type="text" className="form-control" placeholder="enter phone number" value="">{}</p></div>
                    <div className="col-md-12"><label className="labels">Date of Birth</label><p type="date" className="form-control" placeholder="DOB" value="">{userdata.DOB}</p></div>
                    {/* <div className="col-md-12"><label className="labels">Address Line 1</label><p type="text" className="form-control" placeholder="enter address line 1" value="">dfds</p></div>
                    <div className="col-md-12"><label className="labels">Address Line 2</label><p type="text" className="form-control" placeholder="enter address line 2" value="">dfds</p></div>
                    <div className="col-md-12"><label className="labels">Postcode</label><p type="text" className="form-control" placeholder="enter address line 2" value="">dfds</p></div>
                    <div className="col-md-12"><label className="labels">State</label><p type="text" className="form-control" placeholder="enter address line 2" value="">dfds</p></div>
                    <div className="col-md-12"><label className="labels">Area</label><p type="text" className="form-control" placeholder="enter address line 2" value="">dfds</p></div> */}
                    <div className="col-md-12"><label className="labels">Email ID</label><p type="text" className="form-control" placeholder="Email id" value="">{userdata.email}</p></div>
                    {/* <div className="col-md-12"><label className="labels">Password</label><p type="text" className="form-control" placeholder="Password" value="">dfds</p></div> */}
                    <div className="col-md-12"><label className="labels">Gender</label><p type="text" className="form-control" placeholder="Gender" value="">{userdata.gender}</p></div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12"><label className="labels">City</label><p type="text" className="form-control" placeholder="City" value="">{userdata.city}</p></div>
                    {/* <div className="col-md-6"><label className="labels">State/Region</label><p type="text" className="form-control" value="" placeholder="state"/></div> */}
                </div>
                {/* <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5 mt-5 ms-5">
                <h4>Want to change Password?</h4>
                <Link className="mt-5 fs-6 text-decoration-none text-primary" to="" onClick={handleClick}>Change Password</Link>
                
                {isShown && (
                   <div>
                   <div className="col-md-12"><label className="labels">Enter Current Password</label><p type="text" className="form-control" placeholder="Current Password" value="">dfds</p></div>
                   <div className="col-md-12"><label className="labels">Enter New Password</label><p type="text" className="form-control" placeholder="New Password" value="">dfds</p></div>
                   <div className="mt-3"><a className="btn btn-success profile-button">Update</a></div>
                   </div>
               )}

                {/* <div className="col-md-12"><label className="labels">Mobile Number</label><p type="text" className="form-control" placeholder="enter phone number" value="">dfds</p></div> */}
                {/* <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br></br>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><p type="text" className="form-control" placeholder="experience" value="">dfds</p></div> <br></br>
                <div className="col-md-12"><label className="labels">Additional Details</label><p type="text" className="form-control" placeholder="additional details" value="">dfds</p></div>
             */}
             </div>
        </div>
        
    </div>
    </form>
</div>

    </>
  );
}

export default Profile1;