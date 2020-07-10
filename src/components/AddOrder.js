import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class AddOrder extends Component {
    state = {
        open: false,
        flaghouseId: "",
        buyerOrginization: "",
        organization: "",
        group: "",
        license: "",
        duration: ""
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
        payload.id = this.props.licenseTotal + 1
        delete payload.open
        this.props.addLicense(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                flaghouseId: "",
                buyerOrginization: "",
                organization: "",
                group: "",
                license: "",
                duration: ""
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="add-order-button">
                    <Button
                        variant="contained"
                        className="add-car"
                        onClick={this.toggleDialog}
                    >
                        Add Order
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog}>
                        <DialogTitle>Add New Order</DialogTitle>
                        <DialogContent>
                            <form
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField
                                    id="flaghouseId"
                                    placeholder="Flaghouse ID"
                                    value={this.state.flaghouseId}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="buyerOrginization"
                                    placeholder="Buyer"
                                    value={this.state.buyerOrginization}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="group"
                                    placeholder="Group"
                                    value={this.state.group}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="license"
                                    placeholder="License"
                                    value={this.state.license}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="duration"
                                    placeholder="Duration"
                                    value={this.state.duration}
                                    onChange={this.handleTextChange}
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit Order</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddOrder