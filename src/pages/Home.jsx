import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='container main-layout'>
            <Header className='layout-header' />
            <Content className='layout-content' />
            <Footer className='layout-footer' />
        </div>
    );
}