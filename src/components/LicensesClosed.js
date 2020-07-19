import React, { useState, useEffect } from 'react'

const LicensesClosed = (props) => {

        const [licenses, setLicenses] = useState([]);

        useEffect(() => {
            props.fetchLicenses();
        }, []);

        console.log(props.licenses)

        if (props.licenses.length === 0) {
            console.log('No license found.')
            return <div></div>
        }

        else {

            console.log('Licenses found: ', props.licenses)

            let closedLicenses = props.licenses.filter(license => license.isClosed === 1);

            return (
                <table class="table table-striped table-bordered closed-license-table">
                    <thead>
                        <tr>
                            <th scope="col">Flaghouse PO</th>
                            <th scope="col">Buyer</th>
                            <th scope="col">Site</th>
                            <th scope="col">License</th>
                        </tr>
                    </thead>
                    <tbody>
                        {closedLicenses.map((license, idx) => (
                            <tr key={license.id}>
                                <th scope="col">{license["flaghousePO"]}</th>
                                <th scope="col">{license["buyer"]}</th>
                                <th scope="col">{license["site"]}</th>
                                <th scope="col">{license["license"]}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
    }

        export default LicensesClosed