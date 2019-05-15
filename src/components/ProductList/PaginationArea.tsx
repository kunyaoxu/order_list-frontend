import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface IProps {
  resultCount: number;
  divisor: number;
  activeIndex: number;
  onClick(num: number): void;
}

const PaginationArea: React.FC<IProps> = (props) => {
  const returnItems = [];
  const maxNum = Math.ceil(props.resultCount / props.divisor);

  for (let i = 1; i <= maxNum; i++) {
    returnItems.push(
      <PaginationItem active={i === props.activeIndex} key={i} onClick={() => { props.onClick(i) }}>
        <PaginationLink>
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }
  
  return (
    <Pagination>
      {returnItems}
    </Pagination>
  );
}

export default PaginationArea;

