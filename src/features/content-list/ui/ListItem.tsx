import styled from '@emotion/styled';

interface ListItemProps {
  item: {
    coverImage: string;
    title: string;
    artist: string;
    score: string | number;
  };
}

const ListItem = ({ item }: ListItemProps) => {
  return (
    <Item>
      <img src={item.coverImage} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.artist}</p>
        <span>{item.score}</span>
      </div>
    </Item>
  );
};

export default ListItem;

const Item = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #eee;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    object-fit: cover;
  }

  div {
    flex: 1;
    h3 {
      font-size: 0.9rem;
      font-weight: 600;
    }
    p {
      font-size: 0.75rem;
      color: #666;
    }
    span {
      font-size: 0.75rem;
      color: #999;
    }
  }
`;
