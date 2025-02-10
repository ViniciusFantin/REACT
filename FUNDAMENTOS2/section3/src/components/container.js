const Container = ({children, myValue}) => {
    return (
      <div>
          <h1>Containers</h1>
          {children}
  
          <p>Resultado: {myValue}</p>
      </div>
    )
  }
  
  export default Container