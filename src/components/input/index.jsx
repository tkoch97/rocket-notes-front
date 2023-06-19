import { Container } from './styles';
import PropTypes from 'prop-types';

export function Input({ icon: Icon, ...rest }) {
  return(
    <Container>

      {Icon && <Icon />}
      <input {...rest} />

    </Container>
  )
}

Input.propTypes = {
  icon: PropTypes.element
};