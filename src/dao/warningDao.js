async function getWarningFriendList(connection, userId) {
  const getWarningFriendListQuery = `
    SELECT f.id, f.nickname, selected_friends.ratio
    FROM friend f
           JOIN (
      SELECT friend_id, ratio
      FROM (
             SELECT friend_id, SUM(CASE WHEN sticker_id = 4 OR sticker_id = 3 THEN 1 ELSE 0 END) / COUNT(*) AS ratio
             FROM friend_sticker
             WHERE user_id = 4
             GROUP BY friend_id
           ) AS subquery
      WHERE ratio >= 0.6
    ) AS selected_friends ON f.id = selected_friends.friend_id;
    `
  return await connection.query(getWarningFriendListQuery, userId);
}

async function addWarningComment(connection, warningCommentParams) {
  const addWarningCommentQuery = `INSERT INTO warning (friend_id, p_comment, if_comment) values (?, ?, ?);`;
  return await connection.query(addWarningCommentQuery, warningCommentParams)
}

async function findFriendDetail(connection, params) {
  const addWarningCommentQuery = `
    SELECT f.id, f.nickname, f.relation, selected_friends.ratio, selected_friends.sticker3, selected_friends.sticker4
    FROM friend f
    JOIN (
      SELECT friend_id, ratio, sticker3, sticker4
      FROM (
             SELECT friend_id, SUM(CASE WHEN sticker_id = 4 OR sticker_id = 3 THEN 1 ELSE 0 END) / COUNT(*) AS ratio, SUM(CASE WHEN sticker_id = 4 THEN 1 ELSE 0 END) AS sticker4,  SUM(CASE WHEN sticker_id = 3 THEN 1 ELSE 0 END) AS sticker3
             FROM friend_sticker
             WHERE user_id = ? and friend_id = ?
           ) AS subquery
    ) AS selected_friends ON f.id = selected_friends.friend_id;
  `
  return await connection.query(addWarningCommentQuery, params);
}

module.exports = {
  getWarningFriendList,
  addWarningComment,
  findFriendDetail
}