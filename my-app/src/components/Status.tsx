type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading') {
        message = 'Loading...'
    }else if (props.status === 'success') {
        message = 'Data is Success'
    }else if (props.status === 'error') {
        message = 'Data is Filed Error'
    }
  return (
    <div>
        <h1>Status {message}</h1>
    </div>
  )
}

export default Status