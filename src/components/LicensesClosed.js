import React, { useState, useEffect } from 'react'

const LicensesClosed = (props) => {

        const [licenses, setLicenses] = useState([]);

        useEffect(() => {
            props.fetchLicenses();
        }, []);

        if (props.licenses.loading == true) {
            console.log("Loading licenses...")
            return (
            <div>
                <p>Loading...</p>
            </div>
            )
        }
    
        else if (props.licenses.error !== null || props.licenses.items.length === 0) {
            console.log("No licenses found.")
            return (
            <div>
               <p>No licenses found.</p>
            </div>
            )
        }
    
        else {

            console.log('Licenses found: ', props.licenses)

            let undeletedLicenses = props.licenses.items.filter(license => license.isDeleted === 0);
            let closedLicenses = undeletedLicenses.filter(license => license.isClosed === 1);

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