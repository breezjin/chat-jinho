import FriendCard from './FriendCard';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function Friends({ friends, foundFriends, sort }) {
  const ascFriends = [...friends].sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
  const desFriends = [...friends].sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0);
  const ascFoundFriends = [...foundFriends].sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
  const desFoundFriends = [...foundFriends].sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0);

  return (
    <StyledFriends>
      {foundFriends.length === 0 && sort &&
        Array.from(ascFriends).map(user =>
          <FriendCard key={user.id} user={user} />
        )
      }
      {foundFriends.length === 0 && !sort &&
        Array.from(desFriends).map(user =>
          <FriendCard key={user.id} user={user} />
        )
      }
      {foundFriends.length !== 0 && sort &&
        Array.from(ascFoundFriends).map(user =>
          <FriendCard key={user.id} user={user} />
        )
      }
      {foundFriends.length !== 0 && !sort &&
        Array.from(desFoundFriends).map(user =>
          <FriendCard key={user.id} user={user} />
        )
      }
    </StyledFriends>
  );
}

Friends.propTypes = {
  friends: PropTypes.array,
  foundFriends: PropTypes.array,
  sort: PropTypes.bool,
};

const StyledFriends = styled.div`
  width: 100%;
  max-height: 41rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;
