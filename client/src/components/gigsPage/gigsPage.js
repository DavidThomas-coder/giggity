import './gigsPage.styles.scss'
import React, {useEffect, useState} from 'react'
import GigForm from '../gigForm/GigForm'
import GigTile from '../gigTile/gigTile'

const GigsPage = ({user}) => {

    const [seeGigs, setSeeGigs] = useState([])

    const letMeSeeThemGigs = async () => {
        console.log("EXECUTING letMeSeeThemGigs...")
        try {
            const response = await fetch('/api/v1/gigs')
            if(!response.ok){
                throw new Error (`${response.status} (${response.statusText})`)
            }
            const body = await response.json()
            console.log("This is the fetch response:", body)
            setSeeGigs(body.gigs)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const gigList = seeGigs.map(gigObject => {
        return ( 
            <GigTile key={gigObject.id}
            gig={gigObject}
            />
        )
    })

    const updateGigsList = () => {
        letMeSeeThemGigs()
    }

    useEffect(() => {
        console.log("useEffect is running");
        letMeSeeThemGigs().catch(error => console.error("Error in useEffect:", error));
    }, []);


    return (
        <div>
            This is the Gig Page
            <div>
                <GigForm updateGigsList={updateGigsList}/>
            </div>
            <div>
                <ul>{gigList}</ul>
            </div>
        </div>
    )
}

export default GigsPage