import {Container} from './styles.js';
import {FiPlus, FiX} from 'react-icons/fi';
import PropTypes from 'prop-types';

export function NoteItem({isNew, value, onClick, ...rest}) {
  return(
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}

NoteItem.propTypes = {
  isNew: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func
};
