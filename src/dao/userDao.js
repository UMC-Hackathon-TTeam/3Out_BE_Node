async function insertNewUser(connection, newUserParams) {
    const insertNewUserQuery = `insert into user (email, password, nickname, promise, image) values (?, ?, ?, ?, ?);`;
    return await connection.query(insertNewUserQuery, newUserParams);
}

async function findUserByIdPwd(connection, email) {
    const findUserQuery = `SELECT id, nickname, password FROM user WHERE email = ?;`;
    const userRow = await connection.query(findUserQuery, email);
    return userRow[0];
}

async function updateRefreshToken(connection, id, refreshToken) {
    const updateRefreshTokenQuery = `update user set refresh_token = ? where id = ?;`;
    return await connection.query(updateRefreshTokenQuery, [refreshToken, id]);
}

async function findUserById(connection, userId) {
    const findUserQuery = `select id, nickname from user where id = ?;`;
    const userRow = await connection.query(findUserQuery, userId);
    return userRow[0];
}

async function findRefreshTokenById(connection, userId) {
    const findUserQuery = `select refresh_token from user where id = ?;`;
    const userRow = await connection.query(findUserQuery, userId);
    return userRow[0];
}

async function findUserProfileById(connection, userId) {
    const findUserProfileQuery = `select nickname, promise, image from user where id = ?;`
    const userRow = await connection.query(findUserProfileQuery, userId)
    return userRow[0];
}

module.exports = {
    insertNewUser,
    findUserByIdPwd,
    updateRefreshToken,
    findUserById,
    findRefreshTokenById,
    findUserProfileById,
}
