import React from 'react'

export default function Visits() {
  return (
    <div>
        <h1>Visits</h1>
        <h2>Coming Soon</h2>
    </div>
  )
}


// import React, { useState } from 'react'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import Container from '@material-ui/core/Container'
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
// // import AddIcon from '@material-ui/icons/Add'
// import { makeStyles, TextField  } from '@material-ui/core/'
// import InputLabel from '@material-ui/core/InputLabel'
// import NativeSelect from '@material-ui/core/NativeSelect'
// // import FormControlLabel from '@material-ui/core/FormControlLabel'
// import FormControl from '@material-ui/core/FormControl'
// // import FormLabel from '@material-ui/core/FormLabel'

// const useStyles = makeStyles({
// field: {
//   marginTop: 20,
//   marginBottom: 20,
//   display: 'block'
// }
// })
// export default function Visit() {

//   const classes = useStyles()
//   const[ name, setName] = useState('')
//   const[ dateOfBirth, setdateOfBirth] = useState('')
//   const[ gender, setGender] = useState('')
//   // const[ condition, setCondition] = useState('')
//   const [caregiverName, setcaregiverName] = useState('')
//   // const[ phone2, setPhone2] = useState('')
//   const[ phone3, setPhone3] = useState('')
//   const[ relationship, setRelationship] = useState('')
//   // const[ grade, setGrade] = useState('')
//   const[ clinic, setClinic] = useState('')
//   const[ team, setTeam] = useState('')
//   // const[ school, setSchool] = useState('')
//   // const[ headteacher, setHeadteacher] = useState('')


//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if ( name 
//       // && age 
//       && dateOfBirth
//       && gender
//       // && condition
//       && caregiverName
//       && phone3
//       && relationship
//       // && school
//       // && grade
//       // && headteacher
//       // && phone2
//       && clinic
//       && team
//       ) {
//       console.log (
//         name, 
//         // age,
//         dateOfBirth,
//         gender,
//         // condition,
//         caregiverName,
//         phone3,
//         relationship,
//         // school,
//         // grade,
//         // headteacher,
//         // phone2,
//         clinic,
//         team
//         )
//     }
//   }
//   return (
//     <Container size="sm">
//       <Typography
//         variant="h1" 
//         color="textSecondary"
//         component="h2"
//         gutterBottom
//       >
//        Visits
//       </Typography>
//       <Typography
//         variant="h6" 
//         color="textSecondary"
//         component="h2"
//         gutterBottom
//       >
//         Register a New Player
//       </Typography>

//       <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        
//         {/* Player Details */}
//         <TextField
//           onChange={(e) => setName(e.target.value)}
//         className={classes.field} 
//         label="Name"
//         variant="outlined"
//         fullWidth
//         required
//         />
//         {/* <TextField
//           onChange={(e) => setAge(e.target.value)}
//         className={classes.field} 
//         label="Age"
//         variant="outlined"
//         fullWidth
//         required
//         /> */}
//         <TextField
//           onChange={(e) => setdateOfBirth(e.target.value)}
//         className={classes.field} 
//         label="Date of Birth"
//         variant="outlined"
//         fullWidth
//         // required
//         />
//         <FormControl fullWidth>
//           <InputLabel 
//           onChange={(e) => setGender(e.target.value)}
//           variant="outlined" htmlFor="uncontrolled-native">
//             Gender
//           </InputLabel>
//           <NativeSelect
//             inputProps={{
//               name: 'gender',
//               id: 'uncontrolled-native',
//             }}
//           >
//             <option>Female</option>
//             <option>Male</option>
//           </NativeSelect>
//         </FormControl>
//         {/* <TextField
//           onChange={(e) => setCondition(e.target.value)}
//         className={classes.field} 
//         label="Medical Condition"
//         variant="outlined"
//         multiline
//         minRows={4}
//         fullWidth
//         // required
//         /> */}

//         {/* CareGiver Details */}
//         <Typography
//         variant="h6" 
//         color="textSecondary"
//         component="h2"
//         gutterBottom
//         >
//         Care Giver Details
//         </Typography>
//         <TextField
//           onChange={(e) => setcaregiverName(e.target.value)}
//           className={classes.field} 
//           label="Name"
//           variant="outlined"
//           fullWidth
//           // required
//           />
//         <TextField
//           onChange={(e) => setPhone3(e.target.value)}
//           className={classes.field} 
//           label="Phone no:"
//           variant="outlined"
//           fullWidth
//           // required
//           />
//         <FormControl fullWidth>
//           <InputLabel 
//           onChange={(e) => setRelationship(e.target.value)}
//           variant="outlined" htmlFor="uncontrolled-native">
//             Relationship
//           </InputLabel>
//           <NativeSelect
//             inputProps={{
//               name: 'relationship',
//               id: 'uncontrolled-native',
//             }}
//           >
//             <option>Father</option>
//             <option>Mother</option>
//             <option>Guardian</option>
//           </NativeSelect>
//         </FormControl>
//         <br/>
//         <br/>
//         <br/>
//         {/* <Button
//           onChange={() => console.log('you clicked me')}
//           type="submit" 
//           color="secondary" 
//           variant="contained"
//           startIcon={<AddIcon />}>
//             Add Caregiver
//         </Button> */}
//         <br/>
//         <br/>
//         <br/>
//         {/* School Details
//         <Typography
//         variant="h6" 
//         color="textSecondary"
//         component="h2"
//         gutterBottom
//         >
//         School Details
//         </Typography> */}
//         {/* <TextField
//           onChange={(e) => setSchool(e.target.value)}
//           className={classes.field} 
//           label="School Name"
//           variant="outlined"
//           fullWidth
//           // required
//           />
//         <TextField
//           onChange={(e) => setGrade(e.target.value)}
//           className={classes.field} 
//           label="Class/Grade/Form"
//           variant="outlined"
//           fullWidth
//           // required
//           />
//         <TextField
//           onChange={(e) => setHeadteacher(e.target.value)}
//           className={classes.field} 
//           label="Head Teacher's Name"
//           variant="outlined"
//           fullWidth
//           // required
//           />
//         <TextField
//           onChange={(e) => setPhone2(e.target.value)}
//           className={classes.field} 
//           label="Phone no:"
//           variant="outlined"
//           fullWidth
//           // required
//           />
//         <br/> */}
//         {/* SRF Details */}
//         <Typography
//         variant="h6" 
//         color="textSecondary"
//         component="h2"
//         gutterBottom
//         >
//         SRF Details
//         </Typography>
//         <FormControl fullWidth>
//           <InputLabel 
//           onChange={(e) => setClinic(e.target.value)}
//           variant="outlined" htmlFor="uncontrolled-native">
//             Clinic
//           </InputLabel>
//           <NativeSelect
//             inputProps={{
//               name: 'clinic',
//               id: 'uncontrolled-native',
//             }}
//           >
//             <option>Eastlands</option>
//             <option>Kangemi</option>
//             <option>Kibera</option>
//             <option>Mathare</option>
//             <option>Ngewe</option>
//             <option>Tatu City</option>
//             <option>Korogocho</option>
//           </NativeSelect>
//         </FormControl>
//         <br/>
//         <br/>
//         <br/>
//         <FormControl fullWidth>
//           <InputLabel 
//           onChange={(e) => setTeam(e.target.value)}
//           variant="outlined" htmlFor="uncontrolled-native">
//             Team
//           </InputLabel>
//           <NativeSelect
//             inputProps={{
//               name: 'team',
//               id: 'uncontrolled-native',
//             }}
//           >
//             <option>Under 10s</option>
//             <option>Under 12s</option>
//             <option>Under 16s</option>
//             <option>Junior</option>
//             <option>Senior</option>
//           </NativeSelect>
//         </FormControl>
//         <br/>
//         <br/>
//         <br/>
//         {/* Consent
//         <Typography
//         variant="h6" 
//         color="textSecondary"
//         component="h2"
//         gutterBottom
//         >
//         Caregiver Consent
//         </Typography>
//         <Card sx={{ minWidth: 275 }}>
//           <CardContent>
//             <Typography variant="body2">
//             I hereby consent to the participation in the activities 
//             and fully accept and assume all such risking all 
//             responsibility for losses, cost and damages incurred 
//             as a result of such participation. I have completely 
//             read and understood this agreement and its terms. The participant is under 18 year old, as the parent/guardian i sign this agreement on his/her behalf having legal responsibility.All the information above is the truth.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button 
//             size="small"
//             type="submit" 
//             color="secondary" 
//             variant="contained"
//             endIcon={<KeyboardArrowRightIcon />}
//             >Consent</Button>
//           </CardActions>
//         </Card>
//         <br/>
//         <br/>
//         <br/>
//         <Card sx={{ minWidth: 275 }}>
//           <CardContent>
//           <Typography
//             variant="h6" 
//             color="textSecondary"
//             component="h2"
//             gutterBottom
//             >
//               Uploads
//           </Typography>
//             <Typography variant="body2">
//             SRF has a duty of care for the children and will be 
//             responsible to ensure child safety and cover medical cost related to rugby injuries.
//             <br/>
//             <br/>
//             Required documents for registration.
//             <br/>
//             Copy of child birth certificate. <br/>
//             Copy of parents/guardian id.<br/> 
//             Passport size photo.<br/>
//             Exam results copy.<br/>
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button 
//             size="small"
//             type="submit" 
//             color="secondary" 
//             variant="contained"
//             endIcon={<KeyboardArrowRightIcon />}
//             >Upload</Button>
//           </CardActions>
//         </Card> */}
//         <br/>
//         <br/>
//         <Button
//         type="submit" 
//         color="secondary" 
//         variant="contained"
//         endIcon={<KeyboardArrowRightIcon />}>
//         Submit
//         </Button>
//       </form>
      

//       {/* icons */}
//       {/* <br/>
//       <AcUnitOutlinedIcon />
//       <AcUnitOutlinedIcon color="secondary" fontSize="large" />
//       <AcUnitOutlinedIcon color="secondary" fontSize="small" />
//       <AcUnitOutlinedIcon color="action" fontSize="small" />
//       <AcUnitOutlinedIcon color="error" fontSize="small" />
//       <AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}
      
//     </Container>
//   )
// }
