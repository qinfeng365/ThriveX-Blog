import Author from "./Author"
import HotArticle from "./HotArticle"
import RandomArticle from "./RandomArticle"

export default () => {
  return (
    <>
      <div className="right">
        <Author></Author>
        <HotArticle></HotArticle>
        <RandomArticle></RandomArticle>
      </div>
    </>
  )
}