import PropTypes from "prop-types";
import css from "./ErrorMessage.module.css";

type Props = {
  message: string;
};
const ErrorMessage = ({ message }: Props) => {
  return (
    <div className={css.errorMessage}>
      <p>{message}</p>;
    </div>
  );
};
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
