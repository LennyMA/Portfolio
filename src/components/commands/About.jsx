import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Lenin Moreno</HighlightSpan>!
      </p>
      <p>
        I&apos;m{" "}
        <HighlightAlt>a software engineer and back-end developer</HighlightAlt>
      </p>
      <p>
        I am passionate about writing code and <br />
        developing applications to solve, I am also learning front-end.
      </p>
    </AboutWrapper>
  );
};

export default About;
