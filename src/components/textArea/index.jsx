import { Container } from './styles.js';
import PropTypes from 'prop-types';

export function TextArea({value, ...rest}) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}

TextArea.propTypes = {
  value: PropTypes.string
};