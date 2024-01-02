async function getWarningFriendList(connection) {
  const getWarningFriendListQuery = `
        SELECT friend_id
        FROM (
            SELECT friend_id, SUM(CASE WHEN sticker_id = 4 THEN 1 ELSE 0 END) / COUNT(*) AS sticker4_ratio
            FROM friend_sticker
            GROUP BY friend_id
        ) AS subquery
        WHERE sticker4_ratio >= 0.6;
    `
  return await connection.query(getWarningFriendListQuery)
}

async function addWarningComment(connection, warningCommentParams) {
  const addWarningCommentQuery = `INSERT INTO WARNING (friend_id, comment) values (?, ?)`
  return await connection.query(addWarningCommentQuery, warningCommentParams)
}

module.exports = {
  getWarningFriendList,
  addWarningComment
}