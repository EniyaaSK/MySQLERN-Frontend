import React from 'react';
import "./Landing.css";
import logo from "./download (1).png";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const Landingpage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);   
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className='landing'>
        <div className='container-fluid'>
          <div className="row">
            <div className='card shadow-lg col-sm-12'>
              <nav className="navbar navbar-expand-md navbar-dark sticky-top col-sm-12">
                <img src={logo} width="100px" height="100px" alt="College Logo"  />
                <div className='collname'>
                  <h3>MUTHAYAMMAL ENGINEERING COLLEGE</h3>
                  <h6>An Autonomous Institution</h6>
                  <h6>Approved by AICTE | Affiliated to Anna University</h6>
                </div>
                <div>
                  <h3 className='stdname text-primary-emphasis collname'><span>NAME:</span>ENIYAA</h3>
                </div>

                <button className='btn btn-outline-primary log collname m-3'>ECR</button>

                {/* <Button
                  className='btn btn-outline-success log collname m-3'
                  onClick={handleClick}
                >
                  SetAF
                </Button> */}
                <Button
                  className='btn log collname m-3'
                  style={{ color: 'green', borderColor: 'green' }}
                  onClick={handleClick}
                >
                  SetAF
                </Button>

                <Menu
                  id="ecr"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                
                  <MenuItem onClick={handleClose}>Journal Publications</MenuItem>
                  <MenuItem onClick={handleClose}>Conference Publications and Presentations</MenuItem>
                  <MenuItem onClick={handleClose}>Workshop and Seminar</MenuItem>
                  <MenuItem onClick={handleClose}>TechTalks to be delivered Multidisciplinary Lectures</MenuItem>
                  <MenuItem onClick={handleClose}>Faculty Guest Talk in other Institutions</MenuItem>
                  <MenuItem onClick={handleClose}>NPTEL Certification</MenuItem>
                  <MenuItem onClick={handleClose}>Participation in TASTE</MenuItem>
                  <MenuItem onClick={handleClose}>.e-Content, (Video Lecture)</MenuItem>
                  <MenuItem onClick={handleClose}>Visit to Industries, Institution</MenuItem>
                  {/* <MenuItem onClick={handleClose}>
                    <a className="btn" href='/form' >Seed Money Proposal for Research</a>
                  </MenuItem> */}
                  <MenuItem
                    onClick={handleClose}
                    style={{ paddingLeft: 10 }}
                  >
                    <a className="btn" href='/form' style={{ paddingLeft: 5}}>Seed Money Proposal for Research</a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Awards at National, International Level</MenuItem>
                  <MenuItem onClick={handleClose}>Proposals Submission for Grants</MenuItem>
                  <MenuItem onClick={handleClose}>.Books, Chapters Authorship</MenuItem>
                  <MenuItem onClick={handleClose}>Consultancy and Corporate Training done for Revenue Generation</MenuItem>
                  <MenuItem onClick={handleClose}>Patents Filled, Published, Granted</MenuItem>
                  <MenuItem onClick={handleClose}>Collaborative Activities with MoU Signed Industries, Institutions</MenuItem>
                  <MenuItem onClick={handleClose}>Visits to the Library</MenuItem>
                  <MenuItem onClick={handleClose}>Students Motivation for Paper Presentation, Project Submission, Other Contests</MenuItem>
                  <MenuItem onClick={handleClose}>Professional Society Membership</MenuItem>
                  <MenuItem onClick={handleClose}>Students Field Work, Internship Guidance</MenuItem>
                </Menu>

                <button className='btn btn-outline-danger log collname m-3'>SESTA</button>
                <button className='btn btn-outline-info log collname m-3'>Log out</button>

              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;








// import React from 'react';
// import "./Landing.css";
// import logo from "./download (1).png";
// import Menu from '@mui/material/Menu';
// import { MenuItem } from '@mui/material';
// // import a from '@mui/material/a';
// import Button from '@mui/material/Button';

// const Landingpage = () => {
//   const [event, setEvent] = React.useState(null);

//   const handleClick = (event) => {
//     setEvent(event.currentTarget);   
//   };
//   const handleClose = () => {
//     setEvent(null);
//   };

//   const handleAction1 = () => {
    
//     console.log('ecr');
//   };
//   return (
//     <>
//       <div className='landing'>
//         <div className='container-fluid'>
//           <div className="row">
//             <div className='card shadow-lg col-sm-12'>
//               <nav className="navbar navbar-expand-md navbar-dark sticky-top col-sm-12">
//                 <img src={logo} width="100px" height="100px" alt="College Logo" />
//                 <div className='collname'>
//                   <h3>MUTHAYAMMAL ENGINEERING COLLEGE</h3>
//                   <h6>An Autonomous Institution</h6>
//                   <h6>Approved by AICTE | Affiliated to Anna University</h6>
//                 </div>
//                 <div>
//                   <h3 className='stdname text-primary-emphasis collname'><span>NAME:</span>ENIYAA</h3>
//                 </div>

//                 <button className='btn btn-outline-primary log collname m-3'>ECR</button>

//                 <Button
//                   className='btn btn-outline-success log collname m-3'
//                   onClick={handleClick}
//                 >
//                   SetAF
//                 </Button>

                

//                 <Menu
//                   id="ecr"
//                   event={event}
//                   open={Boolean(event)}
                 
//                 >
//                   <MenuItem >Journal Publications</MenuItem>
//                   <MenuItem >Conference Publications and Presentations</MenuItem>
//                   <MenuItem >Workshop and Seminar</MenuItem>
//                   <MenuItem >TechTalks to be delivered Multidisciplinary Lectures</MenuItem>
//                   <MenuItem >Faculty Guest Talk in other Institutions</MenuItem>
//                   <MenuItem >NPTEL Certification</MenuItem>
//                   <MenuItem >Participation in TASTE</MenuItem>
//                   <MenuItem >.e-Content,(Video Lecture)</MenuItem>
//                   <MenuItem >Visit to Industries,Institution</MenuItem>
//                   < a className="btn" href='/form'>Seed Money Proposal for Research</a>
//                   <MenuItem >Awards at National ,International Level</MenuItem>
//                   <MenuItem >Proposals Submission for Grants</MenuItem>
//                   <MenuItem >.Books,Chapters Authorship</MenuItem>
//                   <MenuItem >Consultancy and Corporate Training done for Revenue Generation</MenuItem>
//                   <MenuItem >Patents Filled,Published,Granted</MenuItem>
//                   <MenuItem >Collaborative Activities with MoU Signed Industries,Institutions</MenuItem>
//                   <MenuItem >Visits to the Library</MenuItem>
//                   <MenuItem >Students Motivation for Paper Presentation,Project Submission,Other Contests</MenuItem>
//                   <MenuItem >Professional Society Membership</MenuItem>
//                   <MenuItem >Students Field Work,Internship Guidance</MenuItem>
                
//                 </Menu>

//                 <button className='btn btn-outline-danger log collname m-3'>SESTA</button>
//                 <button className='btn btn-outline-info log collname m-3'>Log out</button>

//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Landingpage;