import './gigsPage.styles.scss'
import React, {useEffect, useState} from 'react'
import GigForm from '../gigForm/GigForm'
import GigTile from '../gigTile/gigTile'

const GigsPage = ({user}) => {

    const [seeGigs, setSeeGigs] = useState(null)

    const letMeSeeThemGigs = async () => {
        try {
            const response = await fetch('/api/v1/gigs')
            if(!response.ok){
                throw new Error (`${response.status} (${response.statusText})`)
            }
            const body = await response.json()
            console.log(body)
            setSeeGigs(body)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        letMeSeeThemGigs()
    }, [])

    

    return (
        <div>
            This is the Gig Page
            <div>
                <GigForm />
            </div>
            <div>
                <GigTile gigs={seeGigs}/>
            </div>
        </div>
    )
}

export default GigsPage