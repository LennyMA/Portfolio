import PropTypes from "prop-types";
import { UsageDiv } from "./styles/Output.styled";

const arg = {
  themes: { placeholder: "theme-name", example: "ubuntu" },
  projects: { placeholder: "project-no", example: "4" },
  socials: { placeholder: "social-no", example: "1" },
};

const Usage = ({ cmd, marginY = false }) => {
  const action = cmd === "themes" ? "set" : "go";
  return (
    <UsageDiv data-testid={`${cmd}-invalid-arg`} marginY={marginY}>
      Usage: {cmd} {action} &lt;{arg[cmd].placeholder}&gt; <br />
      ex: {cmd} {action} {arg[cmd].example}
    </UsageDiv>
  );
};

Usage.propTypes = {
  cmd: PropTypes.oneOf(["themes", "projects", "socials"]).isRequired,
  marginY: PropTypes.bool,
};

export default Usage;
