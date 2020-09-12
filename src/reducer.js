export const initialState = {
   basket: [
      {
         id: '1231231235',
         title: 'Product 3',
         price: 11.96,
         rating: 3,
         image:'https://images-na.ssl-images-amazon.com/images/I/41W9YdrRslL._SX348_BO1,204,203,200_.jpg',
	  },
	  {
		id: '1231231237',
		title: 'Product 6',
		price: 14.96,
		rating: 3,
		image:'https://images-na.ssl-images-amazon.com/images/I/41W9YdrRslL._SX348_BO1,204,203,200_.jpg',
	 },
   ],
   user: null,
};

export const getBasketTotal = (basket) =>(
	basket?.reduce((amount, item) => item.price + amount, 0)
	);


function reducer(state, action) {
   console.log(action);
   switch (action.type) {
      case 'ADD_TO_BASKET':
         //Logic for additing item to basket
         return { ...state, basket: [...state.basket, action.payload] };

      case 'REMOVE_FROM_BASKET':
		 // Logic for Removing item from basket
		 let newBasket = [...state.basket];
		 
		 const index = state.basket.findIndex((basketItem) => basketItem.id===action.id)

		 if(index >=0){
			 newBasket.splice(index, 1);

		 }else{
			 console.warn(`Cant remove product (id:${action.id} as its not in basket`)
		 }

		 return { ...state, 
			basket: newBasket };

      default:
         return state;
   }
}

export default reducer;
