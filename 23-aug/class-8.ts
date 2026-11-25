class Order{
    private totalPayable: number = 0;

     addItem(price: number): void {
        this.totalPayable += price;
     }
      getTotal(): number {
        return this.totalPayable;
      }
}
 
 const order = new Order();

 order.addItem(100);
 order.addItem(500);

  const totalPayable = order.getTotal();
  console.log(totalPayable);