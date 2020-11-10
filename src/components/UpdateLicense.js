import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';


class UpdateLicense extends Component {

    
    state = {
        open: false,
        licenseId: this.props.license.licenseId,
        flaghousePO: this.props.license.flaghousePO,
        buyer: this.props.license.buyer,
        site: this.props.license.site,
        license: this.props.license.license,
        // licenseStart: this.props.license.licenseStart,
        // licenseEnd: this.props.license.licenseEnd,
        licenseStart: '2020-01-10 14:45:12',
        licenseEnd: '2022-01-10 14:45:12',
        isClosed: this.props.license.isClosed,
        isDeleted: this.props.license.isDeleted
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
        delete payload.open
        this.props.updateLicense(payload)
        this.toggleDialog()
        this.props.fetchLicenses()
        this.props.triggerLicenseUpdate()
    }


    render() {
        return (
            <Fragment>
                <EditIcon
                    className="icon" onClick={this.toggleDialog}/>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Update License</DialogTitle>
                        <DialogContent>
                            <form
                                onSubmit={this.handleSubmit}
                                className="update-license-form">
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
                                <TextField
                                    id="licenseStart"
                                    placeholder="Start Date (MM-DD-YYYY)"
                                    // value={`${this.state.licenseStart.slice(5,7)}-${this.state.licenseStart.slice(8,10)}-${this.state.licenseStart.slice(0,4)}`}
                                    value={this.state.licenseStart}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="licenseEnd"
                                    placeholder="Expiration Date (MM-DD-YYYY)"
                                    // value={`${this.state.licenseStart.slice(5,7)}-${this.state.licenseStart.slice(8,10)}-${this.state.licenseStart.slice(0,4)}`}
                                    value={this.state.licenseStart}
                                    onChange={this.handleTextChange}
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Update License</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default UpdateLicense