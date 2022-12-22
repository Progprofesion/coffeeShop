import ContentLoader from "react-content-loader"

const SkeletonCardsList = () => (
    <ContentLoader
        speed={2}
        width={220}
        height={282}
        viewBox="0 0 220 282"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="4" y="13" rx="5" ry="5" width="209" height="143" />
        <rect x="8" y="169" rx="0" ry="0" width="197" height="23" />
        <rect x="4" y="203" rx="0" ry="0" width="64" height="29" />
        <rect x="4" y="244" rx="0" ry="0" width="64" height="31" />
        <rect x="82" y="242" rx="5" ry="5" width="60" height="34" />
        <rect x="149" y="242" rx="5" ry="5" width="65" height="34" />
        <circle cx="145" cy="219" r="12" />
    </ContentLoader>
)

export default SkeletonCardsList

