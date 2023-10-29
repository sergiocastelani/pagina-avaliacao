import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Personprops {
  id: string;
  name: string;
  photo: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

const CardContainer = styled.div`
  width: 14em;
  display: flex;
  gap: 0.4em;
  flex-direction: column;
  justify-content: center;
  padding: 1em 2em;
  border-radius: 1em;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.4px);
  -webkit-backdrop-filter: blur(6.4px);
  color: #333;
`;

const DivLinks = styled.div`
padding-top: 1em;
padding-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i:hover {
    cursor: pointer;
    transform: scale(1.5);
  }

  .fa-linkedin-in {
    color: #0077b5;
  }

  .fa-github {
    color: #0d1117;
  }

  .fa-user-pen {
    color: #cd5c5c;
  }
`;

export function Card(props: Personprops) {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <h2> {props.name}</h2>

      <img src={props.photo} alt="" className="profile" />

      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <DivLinks>
        <a href={props.linkedin} target="blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a href={props.github} target="blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <i
          onClick={() => navigate(`/edit/${props.id}`)}
          className="fa-solid fa-user-pen"
        ></i>
      </DivLinks>
    </CardContainer>
  );
}
