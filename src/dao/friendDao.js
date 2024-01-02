async function addFriend(connection, newFriendParams) {
    const addFriendQuery = `INSERT INTO friend (user_id, nickname, relation, favor) values (?, ?, ?, ?);`;
    return await connection.query(addFriendQuery, newFriendParams);
}

module.exports = {
    addFriend
};
