import { Container } from './styles';
import PropTypes from 'prop-types';

export function NoteDetails({title, children}) {
  return(
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
}

NoteDetails.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string
};