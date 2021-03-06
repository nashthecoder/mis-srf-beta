import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia' 
import ArchiveOutlined from '@material-ui/icons/ArchiveOutlined'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';




export default function PlayerCard({ player}) {
  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item key={player} xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardHeader 
            action={
              <IconButton onClick={() => console.log('archive', player.name)}>
                <ArchiveOutlined />
              </IconButton>
            }/>
            <CardMedia
            component="img"
            sx={{ width: 121 }}
            image={require('../assets/manResized.png')}
            alt="Profile Picture"
            />
            <CardContent sx={{ flex: '2 0 auto' }}>
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
          </Card>
        </Grid>
        
      </Grid> 
    </Container>
    
  )
}