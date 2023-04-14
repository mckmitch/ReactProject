import { Col, Row, UncontrolledCarousel } from 'reactstrap';
import SkillCard from "./SkillCard";
import { selectAllSkills } from './skillsSlice';
import { useSelector } from 'react-redux'; 
import { SKILLCAROUSEL1, SKILLCAROUSEL2 } from '../../app/shared/SKILLS';

const SkillsList = () => {
    const skills = useSelector(selectAllSkills);
    const descriptionPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


    console.log('skills:', skills);
    return (
        <Row className='ms-auto'>
            <h1 style={{fontSize:"60px"}}>Skills</h1>
            <Col md='5' className='m-4'>
                <UncontrolledCarousel items={SKILLCAROUSEL1} />
            </Col>
            <Col md='5' className='m-4'>
                <p className="fs-3">
                    {descriptionPlaceholder}
                </p>
                </Col>
            <Col md='5' className='m-4'>
                <UncontrolledCarousel items={SKILLCAROUSEL2} />
            </Col>
            <Col md='5' className='m-4'>
                <p className="fs-3">
                    {descriptionPlaceholder}
                </p>
            </Col>
            {skills.map((skill) => {
                return (
                    <>
                        <Col md='5' className='m-4' key={skill.id}>
                            <SkillCard skill={skill} />
                        </Col>
                        <Col md='5' className='m-4'>
                            <p className="fs-3">
                                {skill.description}
                            </p>
                        </Col>
                    </>
                );
            })}
        </Row>
    );
};

export default SkillsList;