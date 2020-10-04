import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
    Select, 
    MenuItem, 
    InputLabel
} from '@material-ui/core'

const thinkificBundles = [
    {
        "id": 550225,
        "name": "[Item #01] CATCH Early Childhood Coordination Kit"
    },
    {
        "id": 550228,
        "name": "[Item #02] CATCH Early Childhood Curriculum & Teacher's Manual"
    },
    {
        "id": 550229,
        "name": "[Item #03] CATCH.org Early Childhood Activity Pack"
    },
    {
        "id": 550230,
        "name": "[Item #04] CATCH Coordination Kit (K-5) 6-Week & 9-Week"
    },
    {
        "id": 550232,
        "name": "[Item #05] CATCH Coordination Kit (K-5) 6-Week"
    },
    {
        "id": 550233,
        "name": "[Item #06] CATCH Coordination Kit (K-5) 9-Week"
    },
    {
        "id": 550234,
        "name": "[Item #07] CATCH K-5 Curriculum Bundle"
    },
    {
        "id": 550235,
        "name": "[Item #08] CATCH PE Guidebook & K-5 Physical Activity Pack"
    },
    {
        "id": 963044,
        "name": "[Item #09] CATCH Coordination Kit (6-8)"
    },
    {
        "id": 963045,
        "name": "[Item #10] CATCH 6-8 Curriculum Bundle"
    },
    {
        "id": 963046,
        "name": "[Item #11] CATCH 6-8 PE Guidebook & Physical Activity Pack"
    },
    {
        "id": 963047,
        "name": "[Item #12] CATCH My Breath E-Cigarette & JUUL Prevention"
    },
    {
        "id": 963049,
        "name": "[Item #13] CATCH Kids Club After School Curriculum Grades K-5"
    },
    {
        "id": 963050,
        "name": "[Item #14] CATCH Kids Club After School Curriculum Grades 5-8"
    },
    {
        "id": 963051,
        "name": "[Item #15] CATCH Kids Club K-5 Physical Activity Pack"
    },
    {
        "id": 963053,
        "name": "[Item #16] CATCH Kids Club 5-8 Physical Activity Pack"
    }
]

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
            flaghousePO: '',
            buyer: '',
            site: '',
            license: '',
            licenseStart: '',
            licenseEnd: ''
        })
        this.setState({ open: !this.state.open })
        window.location.reload()
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
                                {/* <TextField
                                    id="license"
                                    placeholder="License"
                                    value={this.state.license}
                                    onChange={this.handleTextChange}
                                    required /> */}
                                <InputLabel id="label">License</InputLabel>
                                <Select labelId="label" id="license" placeholder="License" value={this.state.license} onChange={this.handleTextChange}>
                                {thinkificBundles.map((thinkificLicense, index) => (
                                    <MenuItem value={thinkificLicense.id}>{thinkificLicense.name}</MenuItem>
                                ))}
                                </Select>
                                <TextField
                                    id="licenseStart"
                                    placeholder="Start Date (MM-DD-YYYY)"
                                    value={this.state.licenseStart}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="licenseEnd"
                                    placeholder="Expiration Date (MM-DD-YYYY)"
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