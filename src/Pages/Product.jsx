import {useEffect} from 'react';
import { useParams ,useNavigate} from 'react-router-dom';

/* we try to get data and  */

const products = [
    { id: 1, title: 'Samsung s24' },
    { id: 2, title: 'Samsung s23' },
    { id: 3, title: 'Samsung s22' },
    { id: 4, title: 'iPhone 15' },
    { id: 5, title: 'iPhone 14' },
    { id: 6, title: 'iPhone 13' },
    { id: 7, title: 'iPhone 12' },
  ];
 
const Product = () => {
   

    /* give us whatinside the variable */
  /* const param = useParams();
  console.log(param.productId);
 */

/* from url we /product/10 ty that to reach the product id 10 ,inconsole we see the param =10 */

 /* i will prepare my page acording to this variable , it give my the id from url ,i need that to get data about this product */
 // useParams is a hook to collect url parameters in an object
  const { productId } = useParams(); /* return an object */
  const product = products.find((item) => item.id == productId); /* here we get spesific product */



  // useNavigate is a hook to change page programatically
  /* navigate :is just variable we can rename */
const navigate = useNavigate()

  console.log(productId);  /* productId:  index position  */
/* we use uesEffect to check if the product is exesst or not we chick here */
useEffect(() => {
   //if (productId > 6) navigate('/notfound'); /* to go to another page ,it was general*/
   if (!product) navigate('/notfound');
  }, []);

  /* here chick because here we have all products */
 /* to chick the title 50 ,optional chaning  undifind error to stop this error,
 we expect an object but undifine not objc  */

  return (<div>

    {/* with this aproach productId was representing the index positions not id in the array */}
  {/* 
               Product {products[productId]?.title}
               <button onClick={() => navigate(-1)}>Back</button>  */} {/* to make btn to go the previus page  */}
  Product {product?.title}
  <button onClick={() => navigate(-1)}>Back</button>
  </div>);
  /* http://localhost:5173/product/5  it give me :Product iPhone 13*/
};/* id just from here product component,in App i cannt reach the id dort */

export default Product;
