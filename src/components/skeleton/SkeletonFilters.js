import ContentLoader from "react-content-loader"

const SkeletonFilters = (props) => (
    <ContentLoader
        speed={2}
        width={450}
        height={30}
        viewBox="0 0 450 30"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="2" y="5" rx="10" ry="10" width="79" height="20" />
        <rect x="106" y="2" rx="4" ry="4" width="75" height="25" />
        <rect x="193" y="2" rx="4" ry="4" width="75" height="25" />
        <rect x="275" y="2" rx="4" ry="4" width="75" height="25" />
        <rect x="358" y="2" rx="4" ry="4" width="75" height="25" />
    </ContentLoader>
)

export default SkeletonFilters

