import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education = () => {
  const eduBg = [
    {
      title: "Software Engineering",
      desc: "UNIVERSIDAD TECNICA DE AMBATO | 2018 ~ 2025",
    },
  ];

  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

export default Education;
