'use client'
import { EmbedPDF } from '@simplepdf/react-embed-pdf'

const ResumePage = () => {
  return (
    <>
      <EmbedPDF>
        <a href="/resume.pdf">Opens dummy.pdf</a>
      </EmbedPDF>
    </>
  )
}

export default ResumePage
