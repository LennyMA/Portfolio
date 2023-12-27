import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
     _     _____ _   _ ___ _   _   __  __  ___  ____  _____ _   _  ___  
    | |   | ____| \\ | |_ _| \\ | | |  \\/  |/ _ \\|  _ \\| ____| \\ | |/ _ \\ 
    | |   |  _| |  \\| || ||  \\| | | |\\/| | | | | |_) |  _| |  \\| | | | |
    | |___| |___| |\\  || || |\\  | | |  | | |_| |  _ <| |___| |\\  | |_| |
    |_____|_____|_| \\_|___|_| \\_| |_|  |_|\\___/|_| \\_|_____|_| \\_|\\___/ 
                                                                       
  `}
        </PreName>

        <PreWrapper>
          <PreNameMobile>
            {`
  _     _____ _   _ ___ _   _ 
 | |   | ____| \\ | |_ _| \\ | |
 | |   |  _| |  \\| || ||  \\| |
 | |___| |___| |\\  || || |\\  |
 |_____|_____|_| \\_|___|_| \\_|
                   
          `}
          </PreNameMobile>
        </PreWrapper>
        <Seperator>-----------------------------------------------------------------------</Seperator>
        <div>
          Welcome to Lenin Moreno&apos;s terminal Portfolio.
        </div>
        <div>
          This project&apos;s source code can be found in this project&apos;s{" "}
          <Link href="https://github.com/LennyMA/Portfolio">GitHub repo</Link>.
        </div>
        <Seperator>-----------------------------------------------------------------------</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
