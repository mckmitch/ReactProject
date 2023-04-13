import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PDFResume from '../app/assets/pdf/MITCHELLMCKENNA-RESUME.pdf'


const ResumePage = () => {
    return (
        <Container>
            <SubHeader current='Résumé'/>
            <object data={PDFResume} type="application/pdf" width="100%" height="1205px"> 
                <p>It appears you don't have a PDF plugin for this browser.
                No biggie... you can <a href={PDFResume}>click here to
                download the PDF file.</a></p>  
            </object>
        </Container>
    );
};

export default ResumePage;