import PropTypes from 'prop-types' // impt shortcut

const newMessage = () => {
    return {
        name: 'guille',
        message: 'sos el mejor'
    }
}

// const newMessage = {
//     name: 'guille',
//     message: 'puto'
// }

// const {name,message} = newMessage;

// export const FirstApp = () => {
//   return (
//     <>
//     <h1>Nombre: {newMessage().name}</h1>
//     <p>Mensaje: {newMessage().message}</p>
//     </>
//   )
// }

export const FirstApp = ({ name, message }) => {
  return (
    <>
    <h1>{ name }</h1>
    <p>{ message }</p>
    </>
  )
}


FirstApp.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
  name: 'no hay titulo',
  message: 'no hay mensaje'
}

