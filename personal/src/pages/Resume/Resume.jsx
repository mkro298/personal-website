import React from 'react'
import {res} from '../../assets'
import { Document, Page } from 'react-pdf';

const Resume = () => {
  return (
    <div>
 <Document file={res}>
 <Page pageNumber={1} />
 </Document>
 </div>
  )
}

export default Resume; 