// import { useGetProductsQuery } from '../api/apiSlice';

// import Cards from './Cards';

// const renderCards = () => {
//     const {
//         data: products = [],
//         isLoading,
//         isError
//     } = useGetProductsQuery();

//     const dataProducts = () => {
//         const dataProducts = products.slice(0)
//         return dataProducts;
//     }

//     if (isLoading) {
//         return <div>Loading</div>
//     } else if (isError) {
//         return <div>Error</div>
//     }

//     const renderProducts = (arr) => {
//         return arr.map(({ id, props }) => {
//             return <Cards key={id} {...props} />
//         })
//     }

//     const elements = renderProducts(dataProducts)

//     return (
//         { elements }
//     )
// }

// export default renderCards;


