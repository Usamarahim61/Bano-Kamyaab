
import React,{useState} from 'react';
import Navbar1 from '../../Navbar1';
import Sidebar from '../../Sidebar';





const ReadMore = ({ children }) => {
  let text = children;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <a onClick={toggleReadMore} className="read-or-hide text-primary text-decoration-none">
        {isReadMore ? "...read more" : " show less"}
      </a>
    </p>
  );
}
function UserPrivateUni()

  {

  const width = {
   width: "18rem"
  };
  return (
    <>
    <Navbar1/>
    <Sidebar/>
    
    <div className="py-5">
      <div className="container-fluid">
      <div className='py-5 b_g parent bg-success'>
        <h1 className='pt-4 text-white text-uppercase text-center fw-bold mb-4 mt-5'>Private Universities</h1>
      </div>

      <div className='container shadow-lg p-5 child bg-white rounded-3'>
        <div className='mt-3 content' data-aos="fade-up"  data-aos-duration="2000">
          <h1 className='ribbon'> Introduction</h1>
          <p className='lh-lg homefontsize pt-4'>Private universities and private colleges are institutions of higher education, not operated, owned, or institutionally funded by governments. They may (and often do) receive from governments tax breaks, public student loans, and grants. Depending on their location, private universities may be subject to government regulation. Private universities may be contrasted with public universities and national universities. Many private universities are nonprofit organizations.</p>
        </div>


        <div className=' pb-5'>
      <div className='d-flex justify-content-around pt-5 px-1 '>
        <div>
          <label for="fname">Enter City</label><br></br>
          <input className='searchinput' type="text" id="fname" name="city" placeholder="City"/>          
        </div>
        <div>
          <label for="fname">Enter Field</label><br></br>
          <input className='searchinput' type="text" id="fname" name="field" placeholder="Field"/>          
        </div>
        <div className='d-flex align-items-center'>
         <a className='btn btn-success px-5 rounded-5'>Search</a>          
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("../../images/Riphah1.png")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Riphah International University</h5>
            <ReadMore className="card-text">Riphah International University is situated in Islamabad. The institute has branches in all major cities of Pakistan, including Lahore and Faisalabad. The institute adopts a very holistic approach and has quite distinctive academic policies. The university also offers many courses to its students, which include dental, sciences, medical, IT, and so much more. Riphah University provides numerous scholarships and financial aid to many students.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/umt.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">University of Management and Technology</h5>
            <ReadMore className="card-text">University of Management and Technology, also known as UMT is situated in Lahore and was established in 1990. UMT comes in the W4 category of HEC which is the highest attainable HEC ranking for Pakistani universities. UMT offers more than 100+ bachelor’s, doctoral, and master’s degrees.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/fast.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">National University of Computer and Emerging Sciences</h5>
            <ReadMore className="card-text">National University of Computer and Emerging Sciences is also famously known as FAST. FAST consistently ranks among the top best universities in Pakistan and it offers world-class education on an international level. FAST is known to have one of the best teaching faculties. However, the acceptance rate at FAST is only 5%.</ReadMore>
        </div>
      </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
      <div className="card" style={width}>
        <img src={require("../../images/uniLahore.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">University of Lahore</h5>
            <ReadMore className="card-text">The University of Lahore is one of the largest private universities in Pakistan. It is situated in Lahore and it which was established in 1998. The University of Lahore has campuses in different parts of the country. The institute offers top-class education and has a qualified teaching faculty. The University of Lahore offers a vast range of courses such as Law, Natural Sciences, Computer Sciences, and Engineering.</ReadMore>
        </div>
      </div>
      <div className="card mx-5" style={width}>
        <img src={require("../../images/AghaUni.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Aga Khan Medical University</h5>
            <ReadMore className="card-text">Aga Khan Medical University is one of the best medical universities. Aga Khan Medical University is also known as AKU. It is a renowned name for excellence in the medical field in Pakistan. AKU is also ranked as a leading medical university in Pakistan and ranked as the top 185th-best university in ASIA medical university. However, getting admission to AKU is extremely difficult.</ReadMore>
        </div>
      </div>
      <div className="card" style={width}>
        <img src={require("../../images/Shifa.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fw-bold">Shifa College of Medicine</h5>
            <ReadMore className="card-text">Shifa College of Medicine is one of Islamabad’s best private medical colleges. It is a constituent college of ‘Shifa Tameer-e-MIllat University’. The institute was established in 1998. The university offers many courses, including MBBS, PharmD, DPT, BSN, DPT, and much more.</ReadMore>
        </div>
      </div>
      
      </div>
    </div>
  </div>
  </div>
  </div>


    </>
  );
}




export default UserPrivateUni;
// export default myFunction;