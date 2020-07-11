import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class AddCar extends Component {
    state = {
        open: false,
        name: '',
        mpg: '',
        cylinders: '',
        horsepower: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.carTotal + 1
        delete payload.open
        console.log("THE CAR", payload)
        // add this.props.addCar function here
        // also add this.setState to close the dialog
        this.props.addCar(payload)
        this.setState({ 
            open: false,
            flaghousePO: '',
            buyer: '',
            site: '',
            license: '',
         })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
            flaghousePO: '',
            buyer: '',
            site: '',
            license: '',
            })
        }
    }

    render() {
        return (
            <Fragment>
                    <Button
                        variant="contained"
                        className="add-license"
                        onClick={this.toggleDialog}
                    >
                        Add License
                    </Button>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add License</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="flaghousePO" 
                                    placeholder="Flaghouse PO" 
                                    value={this.state.flaghousePO} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="buyer" 
                                    placeholder="Buyer" 
                                    value={this.state.buyer} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="site" 
                                    placeholder="Site" 
                                    value={this.state.site} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="license" 
                                    placeholder="License" 
                                    value={this.state.license} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddCar