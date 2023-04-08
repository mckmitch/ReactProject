import { Col, Row } from 'reactstrap';
import PortfolioCard from "./PortfolioCard";
import { selectAllPortfolios } from './portfoliosSlice';
import { useSelector } from 'react-redux'; 

const PortfoliosList = () => {
    const portfolios = useSelector(selectAllPortfolios);
    console.log('portfolios:', portfolios);
    return (
        <Row className='ms-auto'>
            {portfolios.map((portfolio) => {
                return (
                    <Col md='5' className='m-4' key={portfolio.id}>
                        <PortfolioCard portfolio={portfolio} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default PortfoliosList;