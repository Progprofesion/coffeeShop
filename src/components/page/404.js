import { Link } from 'react-router-dom';
import HeadBanner from '../headBanner/HeadBanner';

const Page404 = () => {
    return (
        <div>
            <HeadBanner />
            <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontStyle': '24px', 'marginTop': '130px' }} to="/">Back to main page</Link>

        </div>
    )
}

export default Page404;