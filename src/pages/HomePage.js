import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import SkillsList from '../features/skills/SkillsList.js';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <SkillsList />
        </Container>
    );
};

export default HomePage;