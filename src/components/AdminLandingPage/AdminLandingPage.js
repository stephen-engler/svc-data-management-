import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserEntryPage from '../AdminTools/UserEntryPage';

const mapStateToProps = state => ({
  state
})

class AdminLandingPage extends Component {

  render(){
    return (
      <div>
        <h1>Admin Landing Page</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AdminLandingPage);