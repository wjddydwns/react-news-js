
const DefaultLayout = ({children}) => {
  return(
    <div className='w-screen h-screen justify-start items-center flex flex-col'>
        {children}
    </div>
  )
}

export default DefaultLayout