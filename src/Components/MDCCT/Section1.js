import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../CSS/section.css";
import Navbar1 from "../Navbar1";
import Sidebar from "../Sidebar";

function Section1() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {

    setIsShown(current => !current);


  };

  return (
    <>
    <Navbar1/>
    <Sidebar/>

    <div className=" mt-5 ">
    <div class="Head">
	    <div class="overlay">
        <h1 className="fw-bold fs-1">DEMOGRAPHICS</h1>
      </div>
    </div>
    </div>
    <div className="unselectable container px-5 pb-1 border shadow-lg  bg-light">

    <form className="mt-5">
      <div className="d-flex mt-5">
        <div className="col-3 d-flex align-items-end">
          <p className="mb-0 homefontsize"><span className="fw-bold">School/College</span></p>
        </div>
        <div className="col-4 d-flex justify-content-between">  
        <label>
          <input className=" option-input radio" type="radio" name="School/college" value="Government"/>Government
          
          </label>  
          <label className="ms-5">
          <input className=" option-input radio" type="radio" name="School/college" value="Private"/>Private
          
          </label>    
        </div>
      </div>



      <div className="d-flex mt-4">
        <div className="col-3 d-flex align-items-end">
        <p className="mb-0 homefontsize"><span className="fw-bold pe-5 me-2">Program</span></p>          
        </div>

        <div className="col-6 d-flex justify-content-between">
        <label>
          <input className=" option-input radio" type="radio" name="Program" value="Pre-Engineering"/>Pre-Engineering
          
          </label> 
          <label className="ms-3">
          <input className=" option-input radio" type="radio" name="Program" value="Pre-Medical"/>Pre-Medical
          
          </label> 
          <label>
          <input className=" option-input radio" type="radio" name="Program" value="ICS"/>ICS
          
          </label>
        </div>
      </div>


      <div className="d-flex mt-4">
        <div className="col-3 d-flex align-items-end">
         <p className="mb-0 homefontsize"><span className="fw-bold pe-5 me-2">Living Area</span></p>          
        </div>
        <div className="col-4 d-flex justify-content-between">
        <label>
          <input className=" option-input radio" type="radio" name="Living Area" value="Rural"/>Rural
        </label>

        <label className="me-3">
          <input className=" option-input radio" type="radio" name="Living Area" value="Urban"/>Urban
        </label>         
        </div> 
      </div>



      <div className="d-flex mt-4">
        <div className="col-3 d-flex align-items-end">
         <p className="mb-0 homefontsize"><span className="fw-bold pe-5 me-2">Parents</span></p>          
        </div>
        <div className="col-7 d-flex justify-content-between">

        <label>
          <input className=" option-input radio" type="radio" name="parent" value="Both Alive"/>Both Alive
        </label> 
        <label className="ms-4">
          <input className=" option-input radio" type="radio" name="parent" value="One Alive"/>One Alive
        </label> 
        <label className="me-5">
          <input className=" option-input radio" type="radio" name="parent" value="No Alive"/>No Alive
        </label> 

        </div>
      </div>

      {/* <div className="d-flex mt-4">
        <div className="col-3 d-flex align-items-end">
          <p className="mb-0 homefontsize"><span className="fw-bold pe-5 me-2">Parents Occupation</span></p>          
        </div>
        <div className="col-9 d-flex justify-content-between">

        <label>
          <input className=" option-input radio" type="radio" name="Parent_Occupation" value="Job"/>Job
        </label> 
        <label>
          <input className=" option-input radio" type="radio" name="Parent_Occupation" value="Businessman"/>Businessman
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Parent_Occupation" value="Agriculture"/>Agriculture
        </label>  
        <label>
          <input className=" option-input radio" type="radio" name="Parent_Occupation" value="Other"/>Other
        </label> 
        </div>
      </div> */}


      <div className="d-flex mt-4">
        <div className="col-3 d-flex align-items-end">
          <p className="mb-0 homefontsize"><span className="fw-bold pe-5 me-2">Living System</span></p>          
        </div>
        <div className="col-4 d-flex justify-content-between">
        <label>
          <input className=" option-input radio" type="radio" name="Living_System" value="Joint"/>Joint
        </label> 
        <label>
          <input className=" option-input radio" type="radio" name="Living_System" value="Nuclear"/>Nuclear
        </label> 
        </div>
      </div>


      <div className="d-flex mt-4">
        <div className="col-3 d-flex align-items-end">
        <p className="mb-0 homefontsize"><span className="fw-bold pe-5 me-2">Socio Economic System</span></p>          
        </div>
        <div className="col-7 d-flex justify-content-between">
        <label>
          <input className=" option-input radio" type="radio" name="Economic_System" value="Lower-Middle class"/>Lower-Middle class
        </label> 
        <label className="ms-3">
          <input className=" option-input radio" type="radio" name="Economic_System" value="Middle class"/>Middle class
        </label> 
        <label>
          <input className=" option-input radio" type="radio" name="Economic_System" value="Upper-Middle class"/>Upper-Middle class
        </label> 

        </div>
      </div>



      <div className="d-flex mt-4">
        <div className="col-3 d-flex align-items-end">
          <p className="mb-0 homefontsize"><span className="fw-bold pe-5 me-2">Family Income</span></p>          
        </div>
        <div className="col-6 d-flex justify-content-between">

        <label>
          <input className=" option-input radio" type="radio" name="Family_Income" value="20k-40k"/>20k-40k
        </label> 
        <label className="ms-5">
          <input className=" option-input radio ms-5" type="radio" name="Family_Income" value="45k-80k"/>45k-80k
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Family_Income" value="Over 100k"/>Over 100k
        </label>

        </div>  
      </div>



      <div className="d-flex mt-4">
        <div className="col-3 d-flex align-items-end">
          <p className="mb-0 homefontsize"><span className="fw-bold pe-5 me-2">Parents Occupation</span></p>          
        </div>
        <div className="col-9 d-flex justify-content-between">

        <label>
          <input className=" option-input radio" type="radio" name="Parent_Occupation" value="Job"/>Job
        </label> 
        <label>
          <input className=" option-input radio" type="radio" name="Parent_Occupation" value="Businessman"/>Businessman
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Parent_Occupation" value="Agriculture"/>Agriculture
        </label>  
        <label>
          <input className=" option-input radio" type="radio" name="Parent_Occupation" value="Other"/>Other
        </label> 
        </div>
      </div>




      <div className="d-flex mt-4">
        <div className="col-3 d-flex align-items-end">
        <p className="mb-0 homefontsize"><span className="fw-bold pe-5 me-2">Hobbies</span></p>          
        </div>
        <div className="col-9 d-flex justify-content-between">
        <label>
          <input className=" option-input radio" type="radio" name="Hobbies" value="Book Reading"/>Book Reading
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Hobbies" value="Watching TV"/>Watching TV
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Hobbies" value="Watching Movies"/>Watching Movies
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Hobbies" value="Surfing Social Media Apps"/>Surfing Social Media Apps
        </label>

        </div> 
      </div>

      

      <div className="pt-4">
        <div>
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">What are your future goals?</span></p>          
        </div>

        <div className="d-flex justify-content-around">
        <label>
          <input className=" option-input radio" type="radio" name="future_goal" value="Technology"/>Technology
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="future_goal" value="Bussiness"/>Bussiness
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="future_goal" value="Armed Forces"/>Armed Forces
        </label>
        <label>
          <input for="Other" className=" option-input radio" onClick={handleClick} type="radio" name="future_goal" value=""/>Others (Please specify below)
        </label>

        </div>
        {isShown && (
          <div className="info1 pt-3 mt-2">
          <input id="Other" className="SecInput w-50" name="future_goal" ></input>            
          </div>
        )}

      </div>

      <div className="mt-5">
        <div>
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">How do you study for an exam/test?</span></p>          
        </div>
        <div className="col-7 d-flex justify-content-around">
        <label>
          <input className=" option-input radio" type="radio" name="Study_exam" value="Cramming"/>Cramming
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Study_exam" value="Concept"/>Concept
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Study_exam" value="Both"/>Both
        </label>

        </div>
      </div>

      <div className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">Do you prefer studying in group or alone?</span></p>
        <div className="col-7 d-flex justify-content-around">
        <label>
          <input className=" option-input radio" type="radio" name="Prefer_Study" value="Group"/>Group
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Prefer_Study" value="Alone"/>Alone
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Prefer_Study" value="Both"/>Both
        </label>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">Do you like to read books apart from the course?</span></p>
        <div className="col-7 d-flex justify-content-around">
        <label>
          <input className=" option-input radio" type="radio" name="Liketo_readBooks" value="Yes"/>Yes
        </label>
        <label className="">
          <input className=" option-input radio" type="radio" name="Liketo_readBooks" value="No"/>No
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="Liketo_readBooks" value="Maybe"/>Maybe
        </label>
        </div>
      </div>


      <div className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">Do you enjoy surfing the internet and reading different articles available?</span></p>
        <div className="col-7 d-flex justify-content-around">
        <label>
          <input className=" option-input radio" type="radio" name="surfingInternet" value="Yes"/>Yes
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="surfingInternet" value="No"/>No
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="surfingInternet" value="Maybe"/>Maybe
        </label>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">What are the subjects you are best and worst at?</span></p>
          <div className="info1">
          <label for="best" className="pe-5"><span className="fw-bold homefontsize">Best: </span>
          <input className="SecInput w-50 ms-4" type="text" id="best" name="best_worstSubj"/>
          </label>
          <br></br>
          <label for="worst" className="pe-5"><span className="fw-bold homefontsize">Worst: </span>
          <input className="SecInput w-50 ms-4" type="text" id="worst" name="best_worstSubj" />
          </label>
          </div>
      </div>

      <div>
        <h3 className="fw-bold"></h3>
        <p className="homefontsize mb-0"><span className="fw-bold pe-5 me-2">Is it easy for you to maintain your grades?</span></p>
          <div className="d-flex col-6 justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="MaintainGrade" value="Easy"/>Easy
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="MaintainGrade" value="Difficult"/>Difficult
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="MaintainGrade" value="Moderate"/>Moderate
        </label>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">Are there any areas you anticipate will be challenging ahead?</span></p>
        <div className="col-6 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="anticipateChallenge" value="Yes"/>Yes
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="anticipateChallenge" value="No"/>No
        </label>
        <label className="me-5">
          <input className=" option-input radio" type="radio" name="anticipateChallenge" value="Maybe"/>Maybe
        </label>
        </div> 
      </div>

      <div  className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">Have you ever surfed about any degree on the internet?</span></p>
        <div className="col-6 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="surfedAboutDegree" value="Yes"/>Yes
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="surfedAboutDegree" value="No"/>No
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="surfedAboutDegree" value="Just Looked"/>Just Looked
        </label>
        </div> 

      </div>


      <div  className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">Do your teachers challenge you intellectually?</span></p>
        <div className="col-6 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="teacherChallengeYou" value="Yes"/>Yes
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="teacherChallengeYou" value="No"/>No
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="teacherChallengeYou" value="Sometime"/>Sometime
        </label>
        </div> 
      </div>

      <div  className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">How supportive are your teachers towards providing some information out of the box?</span></p>
        <div className="col-6 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="TeacherSupport" value="Very Supportive"/>Very Supportive
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="TeacherSupport" value="No Supportive"/>No Supportive
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="TeacherSupport" value="Moderate"/>Moderate
        </label>
        </div>  
      </div>

      <div  className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">How supportive are your parents towards the accomplishment of your goal?</span></p>
        <div className="col-6 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="ParentSupport" value="Very Supportive"/>Very Supportive
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="ParentSupport" value="No Supportive"/>No Supportive
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="ParentSupport" value="Moderate"/>Moderate
        </label>
        </div>   
      </div>

      <div  className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">Have you thought about your academic major at this point?</span></p>
        <div className="col-6 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="thoughtAboutAcademicMajor" value="Yes"/>Yes
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="thoughtAboutAcademicMajor" value="No"/>No
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="thoughtAboutAcademicMajor" value="Discussing"/>Discussing
        </label>
        </div>  
      </div>

      <div  className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">What do you hope to be able to do when you graduate?</span></p>
        <div className="col-7 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="AfterGraduate" value="Job"/>Job
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="AfterGraduate" value="Innovation"/>Innovation
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="AfterGraduate" value="Go with the flow"/>Go with the flow
        </label>
        </div> 
      </div>


      <div  className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">How do you solve an assignment that seems difficult to you?</span></p>
        <div className="col-6 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="SolveDifficultAssignment" value="Teachers"/>Teachers
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="SolveDifficultAssignment" value="Internet"/>Internet
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="SolveDifficultAssignment" value="By Yourself"/>By Yourself
        </label>
        </div> 

      </div>

      <div  className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">Have you ever been counselled before regarding choosing career ahead?</span></p>
        <div className="col-7 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="CounselledChoosingCareer" value="Counselled"/>Counselled
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="CounselledChoosingCareer" value="Not Counselled"/>Not Counselled
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="CounselledChoosingCareer" value="Moderately Counselled"/>Moderately Counselled
        </label>
        </div>  
      </div>


      <div  className="pt-4">
        <h3 className="fw-bold"></h3>
        <p className="homefontsize"><span className="fw-bold pe-5 me-2">Does this profile describe you accurately?</span></p>
        <div className="col-6 d-flex justify-content-between ms-5">
        <label>
          <input className=" option-input radio" type="radio" name="ProfileDescribeYouAccurately" value="Yes"/>Yes
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="ProfileDescribeYouAccurately" value="No"/>No
        </label>
        <label>
          <input className=" option-input radio" type="radio" name="ProfileDescribeYouAccurately" value="Moderately"/>Moderately
        </label>
        </div>   
      </div>


        <div className="my-5 d-flex justify-content-end">
            <Link type="submit" className="homefontsize fw-bold btn btn-success px-5 py-2" to='/MDCCTmenu'>Submit</Link>
        </div>
    </form>
    </div>
    </>
  );
}

export default Section1;
