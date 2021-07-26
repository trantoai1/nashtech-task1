import { post } from "../api/callAPI";


class CartService{
    add(id,amout){
       
        let listItems=this.getCurrentCart();
        if(!listItems)
        listItems = {};
        listItems[id]=amout;
        
        
        localStorage.setItem('cart',JSON.stringify(listItems));

    }
    isEmpty()
    {
        if(this.getCurrentCart()) return false;
        return true;
    }
    remove(id){
       
        let listItems=this.getCurrentCart();
        if(!listItems)
        return;
        delete listItems[id];
        
        if(Object.values(listItems).length===0)
        localStorage.removeItem('cart');
        else
        localStorage.setItem('cart',JSON.stringify(listItems));

    }
    getCurrentCart()
    {
        return JSON.parse(localStorage.getItem('cart'));
    }
    getTotal()
    {
        return JSON.parse(localStorage.getItem('total'));
    }
    setTotal(num)
    {
        localStorage.setItem('total',JSON.stringify(num));
    }
    checkOut(userId,address,phone)
    {
        const cart = this.getCurrentCart();
        if(!cart) return;
        let body = {};
        body['userId'] = userId;
        body['address'] = address;
        body['phone'] = phone;
        body['details'] = {};
        const keys = Object.keys(cart);
        keys.map((key,index)=>{
            body['details'][key] = cart[key];
            return [];
        })

        post('orders',body).then(res=>{
            if(res)
            {
                localStorage.removeItem('cart');
                localStorage.removeItem('total');
            }
            console.log(res);
        })
    }

}

export default new CartService();