import { Checkbox, Divider, FormControlLabel, Paper, Radio, RadioGroup } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC, ReactNode } from 'react'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))

const ProductPanel: FC<{ name: string }> = (props) => {
  return (
    <Paper>
      <Typography variant="h6" color="inherit" noWrap>
        {props.name}
      </Typography>
    </Paper>
  )
}

const Opt: FC<{ name: string }> = (props) => {
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" color="inherit" noWrap>
        {props.name}
      </Typography>
      {/* <Checkbox aria-label="labe" /> */}
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={'female'}
        onChange={() => {
          console.log('onChange')
        }}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </Grid>
  )
}

const OptColum2: FC<{ name: string }> = (props) => {
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" color="inherit" noWrap>
        {props.name}
      </Typography>
      {/* <Checkbox aria-label="labe" /> */}
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={'female'}
        onChange={() => {
          console.log('onChange')
        }}
      >
        <>
          <FormControlLabel value="female" control={<Radio />} label="Female"></FormControlLabel>
          <Grid container>
            <Grid item xs={6} sm={6}>
              <Paper>
                <Typography>ラベルっす</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Paper>
                <Typography color="inherit">
                  文字を折り返す方法がわからんんんんんんんんん hoge hogeee eeeeee
                  eeeeeeeeeeeeeeeeeeeezzzzzzzzzzzzzzzzaaaaaaaaaaaaa
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </Grid>
  )
}

const TitledBox: FC<{ title: ReactNode }> = (props) => {
  return (
    <Grid container direction="row">
      <Grid item>
        <Paper color="red">
          <Typography>{props.title}</Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>{props.children}</Paper>
      </Grid>
    </Grid>
  )
}

type OptProps = { label: string }
type OptsProps = { list: ReadonlyArray<OptProps> }
const Opts: FC<OptsProps> = (props) => {
  return (
    <Grid container>
      {/* <Checkbox aria-label="labe" /> */}
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={'female'}
        onChange={() => {
          console.log('onChange')
        }}
      >
        {props.list.map((opt) => {
          return (
            <Grid key={opt.label} item xs={12} sm={6}>
              <FormControlLabel value={opt.label} control={<Radio />} label={opt.label} />
            </Grid>
          )
        })}
      </RadioGroup>
    </Grid>
  )
}

type QuestionPanelProps = { label: ReactNode; question: OptsProps }
const QuestionPanel: FC<QuestionPanelProps> = (props) => {
  return (
    <TitledBox title={props.label}>
      <Opts list={props.question.list} />
    </TitledBox>
  )
}

export default function Main() {
  const classes = useStyles()
  // const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    // setActiveStep(activeStep + 1);
  }

  const handleBack = () => {
    // setActiveStep(activeStep - 1);
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Divider />

          <ProductPanel name="商品パネル" />

          <QuestionPanel label="質問１" question={{ list: [{ label: 'aaa' }, { label: 'bbb' }] }} />

          <Divider />
          <Grid container spacing={3}>
            <Opt name="Opt1 " />
            <OptColum2 name="Opt3 " />
          </Grid>

          <div className={classes.buttons}>
            <Button onClick={handleBack} className={classes.button}>
              Back
            </Button>

            <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
              Next
            </Button>
          </div>
        </Paper>
        <Copyright />
      </main>
    </>
  )
}
