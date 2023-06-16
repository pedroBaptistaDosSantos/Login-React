import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login, changeValue} from '../../store/actions/auth.action'
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

  login = () => {
    const {credentials} = this.props;
    this.props.login(credentials).then(() => {
      
    })
  }

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
                value = {this.props.credentials.username}
                onChange={(text) => this.props.changeValue({username: text.target.value})}
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
                value = {this.props.credentials.password}
                onChange={(text) => this.props.changeValue({password: text.target.value})}
                />

                <Button 
                  type="button"
                  variant="contained"
                  fullWidth
                  color="primary"
                  size="large"
                  className="mb-3 mb-md-4 mt-4"
                  onClick={() => this.login()}
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

const mapStateToProps = (state) => ({
  credentials: state.authReducer.credentials,
});

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(login(credentials)),
  changeValue: (value) => dispatch(changeValue(value))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)