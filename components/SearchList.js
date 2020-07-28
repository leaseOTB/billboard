import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardActionArea,
  CircularProgress,
  CardMedia,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Paper,
  Chip,
} from '@material-ui/core';

export default function SearchList(props) {
  return (
    <Grid item xs={12} md={3}>
      <Card
        style={{
          minHeight: '4em',
          maxWidth: '30em',
          backgroundColor: 'purple',
        }}
      >
        <CardActionArea
          href={`/${props.id}`}
          style={{
            padding: '.5em',
          }}
        >
          <Grid
            container
            direction='row'
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid
              item
              xs={5}
              style={{
                maxWidth: '7em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                style={{
                  maxHeight: '7em',
                  padding: '.2em',
                }}
                src={`https://maps.googleapis.com/maps/api/streetview?location=${props.address}&size=800x800&key=${process.env.GOOGLE_API}`}
              />
            </Grid>
            <Grid
              container
              direction='row'
              item
              xs={7}
              justify='center'
              alignItems='center'
            >
              <Typography variant='body1'>{props.address}</Typography>
              <br />
              <br />
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
