async function getRankingsByStickerId(connection, stickerId) {
    let getRankingsQuery = '';

    if (stickerId === 1) {
        getRankingsQuery = `
            SELECT friend_id, COUNT(*) AS sticker_count
            FROM friend_sticker
            WHERE sticker_id = 1
            GROUP BY friend_id
            ORDER BY sticker_count DESC;
        `;
    } else if (stickerId === 2) {
        getRankingsQuery = `
            SELECT friend_id, COUNT(*) AS sticker_count
            FROM friend_sticker
            WHERE sticker_id = 2
            GROUP BY friend_id
            ORDER BY sticker_count DESC;
        `;
    } else if (stickerId === 3) {
        getRankingsQuery = `
            SELECT friend_id, COUNT(*) AS sticker_count
            FROM friend_sticker
            WHERE sticker_id = 3
            GROUP BY friend_id
            ORDER BY sticker_count DESC;
        `;
    } else if (stickerId === 4) {
        getRankingsQuery = `
            SELECT friend_id, COUNT(*) AS sticker_count
            FROM friend_sticker
            WHERE sticker_id = 4
            GROUP BY friend_id
            ORDER BY sticker_count DESC;
        `;
    }

    return await connection.query(getRankingsQuery, [stickerId]);
}

module.exports = {
    getRankingsByStickerId,
};

module.exports = {
    getRankingsByStickerId
}
