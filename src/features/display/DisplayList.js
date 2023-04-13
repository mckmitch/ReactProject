import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';


const DisplayList = () => {

    return (
        <Row>
            {/* {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })} */}
        </Row>
    );
};

export default DisplayList;