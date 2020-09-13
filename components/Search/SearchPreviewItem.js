import {
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from '@material-ui/core'

export const SearchPreviewItem = ({hit, onMouseOver}) => {
  const {  STREET_ADDRESS, ZIP, BBL, INC_2020, INCREASE, objectID, _id } = hit

  return (
    <ListItem href={`/${BBL}`} onMouseOver={onMouseOver} style={{color: 'black'}}>
      <ListItemAvatar>
        <Avatar variant='square' src={`https://maps.googleapis.com/maps/api/streetview?location=${STREET_ADDRESS}&size=800x800&key=${process.env.GOOGLE_API}`} />
      </ListItemAvatar>
      <ListItemText primary={STREET_ADDRESS}
        secondary={
          <>
            <Typography variant='body2'>{ZIP}, NYC</Typography>
            <Typography variant='caption'>BBL - {BBL}</Typography>
          </>
        }
      />
    </ListItem>
  )
}