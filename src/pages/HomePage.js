import { Container } from 'reactstrap';
// import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import SkillsList from '../features/skills/SkillsList.js';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            {/* <DisplayList /> */}
            <SkillsList />
        </Container>
    );
};

export default HomePage;