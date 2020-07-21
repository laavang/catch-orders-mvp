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
        flaghousePO: this.props.license.flaghousePO,
        buyer: this.props.license.buyer,
        site: this.props.license.site,
        license: this.props.license.license
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
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevState.open !== this.state.open) {
    //         this.setState({
    //             flaghousePO: '',
    //             buyer: '',
    //             site: '',
    //             license: '',
    //         })
    //     }
    // }

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