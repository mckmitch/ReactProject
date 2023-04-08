import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectPortfolioById } from '../features/portfolios/portfoliosSlice';
import PortfolioDetail from '../features/portfolios/PortfolioDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux'; 

const PortfolioDetailPage = () => {
    const { portfolioId } = useParams();
    const portfolio = useSelector(selectPortfolioById(portfolioId));
    console.log('portfolio:', portfolio);
    
    return (
        <Container>
            <SubHeader current={portfolio.name} detail={true} />
            <Row>
                <PortfolioDetail portfolio={portfolio} />
                <CommentsList portfolioId={portfolioId} />
            </Row>
        </Container>
    );
};

export default PortfolioDetailPage;