import Cart from './Cart';
describe('Cart', () => {
  let cart;
  let product = { title: 'Adidas', price: 35388 };
  let product2 = { title: 'Nike', price: 78549 };
  beforeEach(() => {
    cart = new Cart();
  });
  describe('getTotal()', () => {
    it('should return 0 when getTota() is executed in a newly created instance', () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantity and price and receive the total amount', () => {
      const item = {
        product,
        quantity: 2,
      };
      cart.add(item);
      expect(cart.getTotal()).toEqual(70776);
    });

    it('should ensure no more than on product exist at a time', () => {
      cart.add({ product, quantity: 2 });
      cart.add({ product, quantity: 1 });

      expect(cart.getTotal()).toEqual(35388);
    });

    it('should update total when a product gets includeda and removed', () => {
      cart.add({ product, quantity: 2 });
      cart.add({ product: product2, quantity: 1 });

      cart.remove(product);
      expect(cart.getTotal()).toEqual(78549);
    });
  });

  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({ product, quantity: 2 });
      cart.add({ product: product2, quantity: 3 });

      expect(cart.checkout()).toMatchInlineSnapshot(`
        Object {
          "items": Array [
            Object {
              "product": Object {
                "price": 35388,
                "title": "Adidas",
              },
              "quantity": 2,
            },
            Object {
              "product": Object {
                "price": 78549,
                "title": "Nike",
              },
              "quantity": 3,
            },
          ],
          "total": 306423,
        }
      `);
    });
  });
});
