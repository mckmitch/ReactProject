import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/resume'>Résumé</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Me</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='5' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-github'
                            href='https://github.com/mckmitch'
                        >
                            <i className='fa fa-github' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-linkedin'
                            href='https://www.linkedin.com/in/mitchell-mckenna/'
                        >
                            <i className='fa fa-linkedin' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <h5>Other Ways to Contact Me</h5>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+16506446863'
                        >
                            <i className='fa fa-phone' /> 1-650-644-6863
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:mckmitch24@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> mckmitch24@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;