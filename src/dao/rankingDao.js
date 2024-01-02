async function getRankingsByStickerId(connection, userId, stickerId) {
    let getRankingsQuery = '';

    if (stickerId === 1) {
        getRankingsQuery = `
            SELECT fs.friend_id, f.image, f.nickname, COUNT(*) AS sticker_count
            FROM friend_sticker fs
            JOIN friend f ON fs.friend_id = f.id
            WHERE fs.sticker_id = 1 AND fs.user_id = ?
            GROUP BY fs.friend_id, f.nickname
            ORDER BY sticker_count DESC
            LIMIT 3;
        `;
    } else if (stickerId === 2) {
        getRankingsQuery = `
            SELECT fs.friend_id, f.image, f.nickname, COUNT(*) AS sticker_count
            FROM friend_sticker fs
            JOIN friend f ON fs.friend_id = f.id
            WHERE fs.sticker_id = 2 AND fs.user_id = ?
            GROUP BY fs.friend_id, f.nickname
            ORDER BY sticker_count DESC
            LIMIT 3;
        `
    } else if (stickerId === 3) {
        getRankingsQuery = `
            SELECT fs.friend_id, f.image, f.nickname, COUNT(*) AS sticker_count
            FROM friend_sticker fs
            JOIN friend f ON fs.friend_id = f.id
            WHERE fs.sticker_id = 3 AND fs.user_id = ?
            GROUP BY fs.friend_id, f.nickname
            ORDER BY sticker_count DESC
            LIMIT 3;
        `
    } else if (stickerId === 4) {
        getRankingsQuery = `
            SELECT fs.friend_id, f.image, f.nickname, COUNT(*) AS sticker_count
            FROM friend_sticker fs
            JOIN friend f ON fs.friend_id = f.id
            WHERE fs.sticker_id = 4 AND fs.user_id = ?
            GROUP BY fs.friend_id, f.nickname
            ORDER BY sticker_count DESC
            LIMIT 3;
        `
    }

    const rankingRow = await connection.query(getRankingsQuery, userId);
    return rankingRow[0];
}

module.exports = {
    getRankingsByStickerId,
};