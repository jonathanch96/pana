const RenderHTMLFromJSON = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}

export default RenderHTMLFromJSON
