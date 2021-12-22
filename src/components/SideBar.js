import React, { useEffect, useState } from 'react';

import ChatList from './ChatList';
import Friends from './Friends';
import Header from './Header';
import SearchBar from './atoms/SearchBar';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function SideBar() {
  const [selectedFriends, setSelectedFriends] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [foundFriends, setFoundFriends] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  const friends = useSelector(state => state.chat.allUsers);

  useEffect(() => {
    if (keyword !== '') {
      const results = friends.filter(user =>
        user.name.includes(keyword)
      );
      setFoundFriends(results);
    }
  }, [friends, keyword])

  function handleOnClick() {
    setSelectedFriends(current => !current);
  }

  function handleOnChange(value) {
    setKeyword(value);
  }

  function handleSort() {
    setIsAscending(current => !current);
  }

  return (
    <StyledSideBar>
      <Header onClick={handleOnClick} disabled={selectedFriends} />
      {selectedFriends
        ? <SearchBar onChange={handleOnChange} handleSort={handleSort} sort={isAscending} />
        : null
      }
      {selectedFriends
        ? <Friends friends={friends} foundFriends={foundFriends} sort={isAscending} />
        : <ChatList />
      }
    </StyledSideBar>
  );
}

const StyledSideBar = styled.div`
  width: 100%;
`;
