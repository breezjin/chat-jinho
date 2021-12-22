import React, { useEffect, useState } from 'react';

import axios from 'axios';

const randomUsers = [];
const randomUsersApi = false;



async function getRandomUsers() {
  if (randomUsersApi) {
    const apiData = await axios.get('https://randomuser.me/api/?results=10');
    console.log('apiData', apiData);//!!!!!!!!
    const { results } = apiData.data;
    console.log('results', results);//!!!!!!!!
    return results;
  }

  const res = await fetch("./data-users.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const results = await res.json();
  results.forEach(item => randomUsers.push(item));

  return results;
}

getRandomUsers();

export default randomUsers;
