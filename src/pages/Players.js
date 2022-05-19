import React, { useEffect, useState } from 'react'
import { Grid, Container } from '@material-ui/core'
import PlayerCard from '../components/PlayerCard' 

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/nashthecoder/srf-mis-beta.db/players')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  return (
  <Container>
    <Grid container spacing={3}>
      {players.map(player =>(
        <Grid item xs={12} sm={8} md={4}>
          <PlayerCard player={player} />
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}
