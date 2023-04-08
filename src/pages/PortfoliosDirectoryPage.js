import { Container } from 'reactstrap';
import PortfoliosList from '../features/portfolios/PortfoliosList';
import SubHeader from '../components/SubHeader';


const PortfoliosDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory'/>
            <PortfoliosList />
        </Container>
    );
};

export default PortfoliosDirectoryPage;