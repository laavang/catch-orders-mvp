import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class AddLicense extends Component {
    state = {
        open: false,
        flaghousePO: '',
        buyer: '',
        site: '',
        license: '',
        licenseStart: '',
        licenseEnd: ''
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    // async const createLicense = (payload) {
    //     const response = await fetch(url, {
    //       method: 'POST', 
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(payload) 
    //     });
    //     return response.json(); 
    //   }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        delete payload.open
        this.props.addLicense(payload)
        this.setState({
            open: false,
            flaghousePO: '',
            buyer: '',
            site: '',
            license: '',
            licenseStart: '',
            licenseEnd: ''
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                flaghousePO: '',
                buyer: '',
                site: '',
                license: '',
                licenseStart: '',
                licenseEnd: ''
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
                                <TextField
                                    id="licenseStart"
                                    placeholder="Start Date (MM/DD/YYYY)"
                                    value={this.state.licenseStart}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="licenseEnd"
                                    placeholder="Expiration Date (MM/DD/YYYY)"
                                    value={this.state.licenseEnd}
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

export default AddLicense