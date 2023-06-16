import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core';
import { Container }  from '@mui/material';
import { Button }  from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {Link} from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const ColorButton = withStyles(theme => ({
  root: {
    color: '#fff',
    backgroundColor: green[500],
    '&:hover ' : {
      backgroundColor: green[700]
    }
  }
}))(Button) 

export class Login extends Component {
  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <div className="mt-3 mt-md-5" >
            <div className="text-center">
              <img src={require('../../logo.png')}  alt="" height="150px" />
              <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">Criando uma aplicação com React e Laravel</Typography>
            </div>

            <div className="mt-4">
              <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="username"
                type="email"
                />

<TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="senha"
                name="password"
                type="password"
                />

                <Button 
                  type="button"
                  variant="contained"
                  fullWidth
                  color="primary"
                  size="large"
                  className="mb-3 mb-md-4 mt-4"
                  >
                    Entrar
                  </Button>

                  <Link href="/register">
                    <ColorButton
                    type="button"
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                    className=""
                    >
                    Cadastrar
                    </ColorButton>
                  </Link>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Login)