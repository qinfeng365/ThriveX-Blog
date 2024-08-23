export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="ContainerComponent">
        <div className="main w-[1200px]">
          {children}
        </div>
      </div>
    </>
  )
}