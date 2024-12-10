function Wrapper({children, className}) {
  return (
    <section className={`max-w-[1400px]  w-[90%] mx-auto ${className}`}>{children}</section>
  )
}
export default Wrapper