import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import gif404HD from 'src/assets/icons/gif404HD.gif';
// import gif404 from 'src/assets/gif404.gif';

const Page404 = () => {
    return (
        <section className="404" style={{ height: '100vh', background: 'url(static/media/524da229af587856fb0c03e41d5ef300.9e5017213a32dfd782e1.jpg) center/cover' }}>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Page 404 erorr" />
                    <title>404</title>
                </Helmet>
                <img loading="lazy" src={gif404HD} alt="error" style={{ 'display': 'block', 'margin': '0 auto 0', paddingTop: '10vh', 'fontWeight': 'bold', 'fontStyle': '24px' }} />
                <h5 style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '36px', color: 'white' }} >Page not found</h5>
                <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '36px', 'margin': '20px' }} to="/main">Back to main page</Link>
            </HelmetProvider>
        </section>
    )
}

export default Page404;