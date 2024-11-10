// pages/index.tsx
import Layout from '../(store)/layout';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <Layout>
            <div className={styles.content}>
                <MainContent />
                <Sidebar />
            </div>
        </Layout>
    );
};

export default Home;
