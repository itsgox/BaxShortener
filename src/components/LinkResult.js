import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from 'axios'
import { IoAlertCircle, IoReloadOutline, IoLink } from "react-icons/io5";

const LinkResult = ({ inputValue }) => {

    const [shortenLink, setShortenLink] = useState('')
    const [copied, setCopied] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            setShortenLink(res.data.result.full_short_link)
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (inputValue.length) fetchData()
    }, [inputValue])

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [copied])

    if (loading) {
        return <span className='empty'><IoReloadOutline className='icon' /> Loading...</span>
    }

    if (error) {
        return <span className='empty red'><IoAlertCircle className='icon' /> Something went wrong...</span>
    }

    const copy = () => {
        let input = document.getElementById("result-input")
        input.select()
    }

    return (
        <>
            {shortenLink && (
                <div className='linkResult'>
                    <input
                        type="text"
                        value={shortenLink}
                        id='result-input'
                        readOnly
                    />
                    <CopyToClipboard
                        text={shortenLink}
                        onCopy={() => setCopied(true)}
                    >
                        <button id='copy-button' className={copied ? 'copied' : ''} onClick={copy}>Copy URL <IoLink className='icon' /></button>
                    </CopyToClipboard>
                </div>
            )}
        </>
    )
}

export default LinkResult