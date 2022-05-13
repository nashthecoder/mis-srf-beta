import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import PlayerCard from '../components/PlayerCard'

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/players')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  return (
    <Container>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        {players.map(player => (
          <Grid item xs={12} md={6} lg={4} key={player.id}>
            <PlayerCard player={player}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
