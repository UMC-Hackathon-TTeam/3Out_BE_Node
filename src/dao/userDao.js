async function insertNewUser(connection, newUserParams) {
    const insertNewUserQuery = `insert into user (login_id, password, email, name, nickname, promise) values (?, ?, ?, ?, ?, ?);`;
    return await connection.query(insertNewUserQuery, newUserParams);
}

async function findUserByIdPwd(connection, loginId, password) {
    const findUserQuery = `select id, nickname from user where login_id = ? and password = ?;`;
    return await connection.query(findUserQuery, [loginId, password]);
}

module.exports = {
    insertNewUser,
    findUserByIdPwd,
};
