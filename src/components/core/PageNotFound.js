import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Home from '@material-ui/icons/Home'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  icon: {
    width: 192,
    height: 192,
    color: theme.palette.secondary.main,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: `100%`,
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    margin: 0,
    height: `calc(100vh - 64px)`,
  },
  button: {
    marginTop: 20,
  },
}))

const PageNotFound = () => {
  const classes = useStyles()

  return (
    <div title='page_not_found'>
      <div className={classes.paper}>
        <div className={classes.container}>
          <Typography variant="h4">404</Typography>
          <Typography variant="subtitle1">
            Page not found
          </Typography>
          <Button
            color="secondary"
            aria-label="home"
            href="/"
            className={classes.button}
          >
            <Home />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound