// import { FormControl } from "react-bootstrap"
// import { InputLabel } from "@mui/material"
// import Select from "@mui/material"
// import MenuItem from "@mui/material"
// import Box from "@mui/material"
// import TextField from "@mui/material"
// import Button from "react-bootstrap"
// import Stack from "react-bootstrap"


import React from 'react';
import { Button, Container, TextField, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';

const Form = () => {
    const [academicYear, setAcademicYear] = React.useState('');
    const [semester, setSemester] = React.useState('');
    const [facultyName, setFacultyName] = React.useState('');
    const [researchTitle, setResearchTitle] = React.useState('');
    const [seedMoney, setSeedMoney] = React.useState('');
    const [yearOfReceiving, setYearOfReceiving] = React.useState('');
    const [attachments, setAtttachments] = React.useState('');
    const [sanction, setSanction] = React.useState('');
    const [errors, setErrors] = React.useState({
        academicYear: false,
        semester: false,
        facultyName: false,
        researchTitle: false,
        seedMoney: false,
        yearOfReceiving: false,
        attachments:false,
        sanction:false,
    });

    const handleSubmit = () => {
        const newErrors = {
            academicYear: academicYear === '',
            semester: semester === '',
            facultyName: facultyName === '',
            researchTitle: researchTitle === '',
            seedMoney: seedMoney === '',
            yearOfReceiving: yearOfReceiving === '',
            attachments: attachments === '',
            sanction: sanction === '',
        };
    
        if (Object.values(newErrors).some((error) => error)) {
            setErrors(newErrors);
            let errorMessage = "Please fill in the following fields:\n";
            if (newErrors.academicYear) errorMessage += "- Academic Year\n";
            if (newErrors.semester) errorMessage += "- Semester\n";
            if (newErrors.facultyName) errorMessage += "- Faculty Name\n";
            if (newErrors.researchTitle) errorMessage += "- Research Title\n";
            if (newErrors.seedMoney) errorMessage += "- Seed Money\n";
            if (newErrors.yearOfReceiving) errorMessage += "- Year of Receiving\n";
            if (newErrors.attachments) errorMessage += "- Attachments\n";
            if (newErrors.sanction) errorMessage += "- METRF Sanction Letter PDF\n";
            alert(errorMessage);
            console.log("Form submission failed - All fields are required");
        } else {
            setErrors({
                academicYear: false,
                semester: false,
                facultyName: false,
                researchTitle: false,
                seedMoney: false,
                yearOfReceiving: false,
                attachments: false,
                sanction: false,
            });
            alert("Form submitted successfully");
            console.log("Form submitted successfully");
        
        }
    };
    

    const handleClear = () => {
        setAcademicYear('');
        setSemester('');
        setFacultyName('');
        setResearchTitle('');
        setSeedMoney('');
        setYearOfReceiving('');
        setAtttachments('');
        setSanction('');
        setErrors({
            academicYear: false,
            semester: false,
            facultyName: false,
            researchTitle: false,
            seedMoney: false,
            yearOfReceiving: false,
            attachments:false,
            sanction:false,
        });
    };

    return (
        <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container maxWidth="sm">
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                    <h1 style={{ color: 'red', textAlign: 'center' }}>Seed money proposal for Research</h1>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Academic Year</InputLabel>
                                <Select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} required error={errors.academicYear}>
                                    <MenuItem value="">Select the Academic Year</MenuItem>
                                    <MenuItem value="2023-2024">2023-2024</MenuItem>
                                    <MenuItem value="2024-2025">2024-2025</MenuItem>
                                    <MenuItem value="2025-2026">2025-2026</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Semester</InputLabel>
                                <Select value={semester} onChange={(e) => setSemester(e.target.value)} required error={errors.semester}>
                                    <MenuItem value="">Select the Semester</MenuItem>
                                    <MenuItem value="I">I</MenuItem>
                                    <MenuItem value="II">II</MenuItem>
                                    <MenuItem value="III">III</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Name of the Faculty" fullWidth value={facultyName} onChange={(e) => setFacultyName(e.target.value)} required error={errors.facultyName} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Title of the Research Project" fullWidth value={researchTitle} onChange={(e) => setResearchTitle(e.target.value)} required error={errors.researchTitle} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Amount of Seed Money (in lakhs)" fullWidth value={seedMoney} onChange={(e) => setSeedMoney(e.target.value)} required error={errors.seedMoney} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Year of Receiving" fullWidth value={yearOfReceiving} onChange={(e) => setYearOfReceiving(e.target.value)} required error={errors.yearOfReceiving} />
                        </Grid>
    
                        <Grid item xs={12}>
                            <TextField type="file" label="Attachments" fullWidth value={attachments} onChange={(e) => setAtttachments(e.target.value)} required error={errors.attachments}  />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="file" label="METRF Sanction Letter PDF" fullWidth value={sanction} onChange={(e) => setSanction(e.target.value)} required error={errors.sanction}  />
                        </Grid>
                        </Grid>
                        
                
                    <Grid container spacing={2} style={{ marginTop: '20px' }}>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Submit</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="error" fullWidth onClick={handleClear}>Clear</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Form;  



// const Form = () => {
//     return (
//         <>
//             <div>
//                 <meta charSet="UTF-8" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <title>Bootstrap Project</title>
//                 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
//                 <style dangerouslySetInnerHTML={{ __html: "\n        body {\n          background-color: lightblue;\n        }\n      " }} />
//                 <div className="container">
//                     <div className="d-flex flex-column align-items-center translate-middle position-absolute bg-white top-100 start-50 p-4 rounded" style={{ zIndex: 10 }}>
//                         <h1 className="text-danger">Seed money proposal for Research</h1>
//                         <div className="container mt-5">
//                             <label className="form-label"><h5>Academic Year</h5></label>
//                             <select className="form-select" id="exampleSelect">
//                                 <option selected>Select the Academic Year</option>
//                                 <option value="option1">2023-2024</option>
//                                 <option value="option2">2024-2025</option>
//                                 <option value="option3">2025-2026</option>
//                             </select>
//                         </div>
//                         <div className="container mt-2">
//                             <label className="form-label"><h5>Semester</h5></label>
//                             <select className="form-select" id="exampleSelect">
//                                 <option selected>Select the Semester</option>
//                                 <option value="option1">I</option>
//                                 <option value="option2">II</option>
//                                 <option value="option3">III</option>
//                             </select>
//                         </div>
//                         <div className="container mt-2">
//                             <label className="form-label"><h5>Name of the Faculty</h5></label>
//                             <input type="text" name="username" placeholder="Enter the Name" className="form-control" />
//                         </div>
//                         <div className="container mt-2">
//                             <label className="form-label"><h5>Title of the Research Project</h5></label>
//                             <input type="text" name="username" placeholder="Enter the Title" className="form-control" />
//                         </div>
//                         <div className="container mt-2 ">
//                             <label className="form-label"><h5>Amount of Seed Money (in lakhs)</h5></label>
//                             <div className="col-6">
//                                 <input type="text" name="seedMoney" placeholder="Enter the Amount" className="form-control" />
//                             </div>
//                         </div>
//                         <div className="container mt-2">
//                             <label className="form-label"><h5>Year of Receiving</h5></label>
//                             <input type="year" name="year" placeholder="YYYY" className="form-control" />
//                         </div>
//                         <div className="container mt-2">
//                             <label className="form-label"><h5>Attachments</h5></label>
//                             <input type="file" name="PDF" placeholder="Attachments" className="form-control" />
//                         </div>
//                         <div className="container mt-2">
//                             <label className="form-label"><h5>METRF Sanction Letter PDF</h5></label>
//                             <input type="file" name="PDF" placeholder="Attachments" className="form-control" />
//                         </div>
//                         <div className="mt-5 col-3 d-flex justify-content-center">
//                             <input className="col-12 btn btn-primary" type="button" defaultValue="Submit" />
//                             <input className="col-12 btn btn-danger" type="button" defaultValue="Clear" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

