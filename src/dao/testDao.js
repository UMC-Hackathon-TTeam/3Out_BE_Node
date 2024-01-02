async function testDB(connection, testId) {
    const testQuery = `SELECT id FROM test WHERE testId = ?;`;
    const testRow = await connection.query(testQuery, testId);
    return testRow[0];
}

module.exports = {
    testDB
};