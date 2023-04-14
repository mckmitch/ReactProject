import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import AboutMeList from '../features/aboutMe/AboutMeList.js';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Me' />
            <Row className='row-content'>
                <AboutMeList />
            </Row>
        </Container>
    );
};

export default AboutPage;