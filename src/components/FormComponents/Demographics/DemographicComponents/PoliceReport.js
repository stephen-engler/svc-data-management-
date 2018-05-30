import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, InputLabel, Select, FormControl, Divider, } from '@material-ui/core';


const mapStateToProps = state => ({
    state
});

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 100,
        textAlign: 'center'
    },
});

class PoliceReport extends Component {
    constructor(){
        super();
        this.state = {
            police_report_filed: ''
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        this.props.dispatch({
          type: this.props.dispatchTo,
          payload: { ...this.state, [name]: value }
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h3>Was a police report filed?</h3>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="police_report_filed">Select One</InputLabel>
                    <Select
                        value={this.state.police_report_filed}
                        onChange={this.handleChangeFor}
                        inputProps={{
                            name: 'police_report_filed',
                            id: 'police_report_filed',
                        }}>
                        <Divider />
                        <MenuItem value="yes">Yes</MenuItem>
                        <Divider />
                        <Divider />
                        <MenuItem value="no">No</MenuItem>
                        <Divider />
                        <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
}

PoliceReport.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(PoliceReport));