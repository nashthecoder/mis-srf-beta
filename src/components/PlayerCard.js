import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

export default function PlayerCard({ player, handleDelete }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(player.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          name={player.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {player.age}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}