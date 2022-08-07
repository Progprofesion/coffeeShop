// import { useGetProductsIdQuery, useGetProductsQuery } from '../../api/apiSlice';

// import { useParams } from 'react-router-dom';

// import SingleCoffeePage from '../SingleCoffeePage';

// const SingleCoffeeLayout = () => {
//     const id = useParams()

//     const { coffeeId } = id

//     const {
//         data: test = [],
//         isLoading,
//         isError
//     } = useGetProductsIdQuery(coffeeId);


//     // const arrTest = Object.entries(test)

//     // console.log(arrTest)

//     const arrTest = Object.entries(test);
//     console.log(test.title)




//     // const arrSuccess = arrTest.forEach(([key, value]) => {
//     //     console.log(key, value);
//     // });

//     // console.log(arrSuccess)


//     if (isLoading) {
//         return <h5>Loading</h5>
//     } else if (isError) {
//         return <h5>Error</h5>
//     }

//     const renderCardsList = (arr) => {
//         if (arr.lenght === 0) {
//             return <h5>Not products</h5>
//         }

//         return arr.map(({ id, ...props }) => {
//             return <SingleCoffeePage key={id} {...props} />
//         });

//     };




//     const elements = renderCardsList(arrTest);

//     return (
//         elements

//     )
// };

// export default SingleCoffeeLayout;