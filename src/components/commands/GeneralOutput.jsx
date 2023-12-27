import PropTypes from "prop-types";
import { Wrapper } from "../styles/Output.styled";

const GeneralOutput = ({ children }) => <Wrapper>{children}</Wrapper>;

GeneralOutput.propTypes = {
  children: PropTypes.string.isRequired,
};

export default GeneralOutput;
