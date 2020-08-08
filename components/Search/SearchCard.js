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

export default function SearchCard(props) {
  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <Card
        style={{
          minHeight: '7em',
          maxHeight: '7em',
          maxWidth: '20em',
          backgroundColor: 'none',
        }}
      >
        <CardActionArea
          href={`/${props.BBL}`}
          style={{
            padding: '0em',
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
              xs={12}
              md={5}
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
                  maxHeight: '8em',
                  marginLeft: '-.4em',
                }}
                src={`https://maps.googleapis.com/maps/api/streetview?location=${props.address}&size=800x800&key=${process.env.GOOGLE_API}`}
              />
            </Grid>
            <Grid
              container
              direction='row'
              item
              xs={12}
              md={7}
            >
              <Typography variant='body1' style={{padding: '1em'}}>{props.address}</Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
