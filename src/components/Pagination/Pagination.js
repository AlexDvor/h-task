import { Pagination } from 'react-bootstrap';

export default function PaginationUsers() {
  let active = 5;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <div>{/* <Pagination onClick={e => console.log(e)}>{items}</Pagination> */}</div>
    </>
  );
}
