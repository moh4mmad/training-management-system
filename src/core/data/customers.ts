interface ICustomer {
  id: number;
  code: string;
  bg: string;
}

const customers: Array<ICustomer> = [
  {
    id: 1,
    code: "1234",
    bg: "A+",
  },
  {
    id: 2,
    code: "123",
    bg: "A-",
  },
  {
    id: 3,
    code: "123",
    bg: "AB+",
  },
];

export { ICustomer };

export default customers;
