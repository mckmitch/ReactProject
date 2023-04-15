import { Col } from 'reactstrap';
import AboutMe from './AboutMe.js';
import { selectAllAboutMe } from './aboutMeSlice.js';
import { useSelector } from 'react-redux';

const AboutMeList = () => {
    const aboutMe = useSelector(selectAllAboutMe);
    return (
        <Col className='mt-4'>
            {aboutMe.map((me) => {
                return (
                    <div className='d-flex mb-5' key={me.id}>
                        <AboutMe me={me} />
                    </div>
                );
            })}
        </Col>
    );
};

export default AboutMeList;