export const getRandomColor = ()=>{
    var letters ='0123456789ABCDEF';
    var color = "#";
    for(var i =0;i<6;i++){
        color+= letters[Math.floor(Math.random()*16)];
    }
    return color;
}; 

//create product array
export const products = [
    {
      "imageURL": "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",
      "title": "Product 1",
      "description": "Description of product 1",
      "actionName":"Product-1",
    },
    {
      "imageURL": "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
      "title": "Product 2",
      "description": "Description of Product 2",
      "actionName":"Product-2",
    },
    {
      "imageURL": "https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png",
      "title": "Product 4",
      "description": "Description of Product 3",
      "actionName":"Product-3",
    }
  ]