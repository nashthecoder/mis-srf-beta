import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
// import CardMedia from '@material-ui/core/CardMedia' 
// import CardContent from '@material-ui/core/CardContent'
// import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography'
import ArchiveOutlined from '@material-ui/icons/ArchiveOutlined'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';



export default function PlayerCard({ player}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card elevation={1} sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardHeader 
        action={
          <IconButton onClick={() => console.log('archive', player.name)}>
            <ArchiveOutlined />
          </IconButton>
        }/>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
            {player.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            ID: {player.id}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            CLINIC: {player.clinic}
          </Typography>
        </CardContent>
      </Box>
      {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}> 
          <IconButton onClick={() => console.log('archive', player.name)}>
        
          </IconButton>
      </Box> */}
      {/* <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={"/src/assets/man.png"}
        alt="Profile Picture"
      /> */}
    </Card>

    // <Card>
    //   <Box>
    //     <CardContent>
    //       <Typography key="name" component="div" variant="h5">Name: {player.name}</Typography>
    //       <Typography key="id" component="div" variant="subtitle1">Id: {player.id}</Typography>
    //       <Typography key="clinic" component="div" variant="subtitle1">Clinic: {player.clinic}</Typography>
    //     </CardContent>
    //   </Box>
    //   <Box>

    //   </Box>
    //   <CardMedia
    //   component="img"
    //   sx={{ width: 151}}>
    //   image="/src/assets/man.png"
    //   alt="Profile Picture"
    //   </CardMedia>
    // </Card>
  )
}

// export default function PlayerCard({ player, handleDelete }) {
//   return (
//     <div>
//       <Card elevation={1}>
//         <CardHeader
//           action={
//             <IconButton onClick={() => handleDelete(player.id)}>
//               <DeleteOutlined />
//             </IconButton>
//             }
//             name={player.name}
//             clinic={player.clinic}
//           />
//           <CardContent>
//             <Typography variant="body2" color="textSecondary">
//               {player.age}
//             </Typography>
//           </CardContent>
//       </Card>
//     </div>
//   )
// }