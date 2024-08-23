import "./index.scss"

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="ContainerComponent">
        <div className="main">
          {children}
        </div>
      </div>
    </>
  )
}