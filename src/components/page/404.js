import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeadBanner from '../headBanner/HeadBanner';
import Error from 'src/assets/Error.gif';

const Page404 = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Page 404 erorr" />
                    <title>404</title>
                </Helmet>
                <HeadBanner />
                <img src={Error} alt="error" style={{ 'display': 'block', 'margin': '130px auto 0', 'fontWeight': 'bold', 'fontStyle': '24px', 'marginTop': '130px' }} />
                <h5 style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontStyle': '24px' }} >Page not found</h5>
                <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontStyle': '24px', 'margin': '20px' }} to="/">Back to main page</Link>
            </HelmetProvider>
        </div>
    )
}

export default Page404;