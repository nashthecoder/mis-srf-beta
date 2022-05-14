import React, { useEffect, useState } from 'react'
import { Paper, Grid, Container } from '@material-ui/core'
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
    <Grid container spacing={3}>
      {players.map(player =>(
        <Grid item xs={12} md={6} lg={4}>
          <PlayerCard player={player} />
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}
