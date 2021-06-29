import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( {title, onAdd, showAddTask} ) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add' } onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'My Task Tracker 1.1'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'blue', backgroundColor: 'black'
// }

export default Header
