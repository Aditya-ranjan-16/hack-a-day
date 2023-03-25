import { PDFViewer } from '@react-pdf/renderer';
import AuthContext from '../store/auth-context';
import MyDocument from '../components/MyDocument';
function ViewPdf({pdfdata}){
    return(
       
        <PDFViewer className='w-full h-[1000px]'> 
        <MyDocument pdfdata={pdfdata} />
      </PDFViewer>
    )

}

export default ViewPdf