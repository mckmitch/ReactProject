import { Col, Row } from 'reactstrap';
import SkillCard from "./SkillCard";
import { selectAllSkills } from './skillsSlice';
import { useSelector } from 'react-redux'; 

const SkillsList = () => {
    const skills = useSelector(selectAllSkills);
    console.log('skills:', skills);
    return (
        <Row className='ms-auto'>
            {skills.map((skill) => {
                return (
                    <Col md='5' className='m-4' key={skill.id}>
                        <PortfolioCard skill={skill} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default SkillsList;