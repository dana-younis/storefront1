let initialState = {
  categories: [
    {
      normalizedName: 'FOOD',
      displayName: 'FOOD',
      description: 'Eat one of the best food',
    },
    {
      normalizedName: 'CARS',
      displayName: 'CARS',
      description: 'the best cars',
    },
    {
      normalizedName: 'ELECTRONICS',
      displayName: 'ELECTRONICS',
      description: 'Keep up to date !',
    },
  
  ],
  activeCategory: {},
};




export default function categoriesReducer(state=initialState,action){
  const {payload,type} = action;
  switch(type){
      case 'SELECT_CATEGORY':
          let modified={};
          state.categories.forEach(item=>{
              if(item.name === payload){
                  modified=item;
              }
          });
          return {
              categories:state.categories,
              activeCategory:modified
          };
      default:
          return state;
  }
}


export function activeCategory(name){
  return {
      type:'SELECT_CATEGORY',
      payload:name
  }
}
