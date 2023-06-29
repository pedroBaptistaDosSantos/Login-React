import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValue, registerUser } from '../../store/actions/register.action'
import { rootUrl } from '../../config/globalConfig';

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
}))    


export class Register extends Component {

    register = () => {
        this.props.registerUser(this.props.data)
            .then(() => {
                if(this.props.success){
                    window.location.replace(rootUrl+'/painel')
                }
            })
    }

  render() {
    return (
        <div>
        <Container component="main" maxWidth="xs">
          <div className="mt-3 mt-md-5" >
            <div className="text-center">
              <img src={require('../../logo.png')}  alt="" height="150px" />
              <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">Crie sua conta grátis!</Typography>
            </div>

            
              

            <div className="mt-4">

            <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="nome"
                name="username"
                type="text"
                value = {this.props.data.username}
                onChange={(text) => this.props.changeValue({username: text.target.value})}
                />

              <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                value = {this.props.data.email}
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
                value = {this.props.data.password}
                onChange={(text) => this.props.changeValue({password: text.target.value})}
                />

                <Button 
                  type="button"
                  variant="contained"
                  fullWidth
                  color="primary"
                  size="large"
                  className="mb-3 mb-md-4 mt-4"
                  onClick={() => this.register()}
                  >
                    Cadastrar
                  </Button>
                    <div className='text-center'>
                    <Link href="/login" className='mt-4 text-center' color='secondary' variant='body2'>
                    Fazer login
                  </Link>
                    </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    data: state.registerReducer.data,
    success: state.registerReducer.successs,
    error: state.registerReducer.error
})

const mapDispatchToProps = dispatch => ({
    changeValue: value => dispatch(changeValue(value)),
    registerUser: data => dispatch(registerUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)