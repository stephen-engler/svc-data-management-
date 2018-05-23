const customReportObject = require("../modules/custom.report.object");


//i'm going to assume params is an object with keys that correspond to 
//keys in the customReportObject 
function makeCustomQuery  (params, customReportObject) {
    const countWhere = `(SELECT COUNT(*) FROM "victim" WHERE `;
    //sets default start date and end date for queries
    let defaultStartDate = "1900-01-01";
    let defaultEndDate = "2100-01-01";
    const values =[defaultStartDate, defaultEndDate];
    //Beginning of queryText
    let queryText = `SELECT `;
    console.log('params ', params);

    //iterates over the params object and for each key 
    //checks if the key matches a key in the customReportObject
    Object.keys(params).forEach(keyParams=>{
        Object.keys(customReportObject).forEach(keyCustomReport=>{
            if(keyParams == keyCustomReport){
                //If matches adds the countWhere string and the query text at the key
                queryText += countWhere;
                queryText += customReportObject[keyCustomReport];
            }
        })// end customReport Loop

        //checks if the want custom start and end date
        if(keyParams== 'startDate'){
            values[0]= params[keyParams];
        } else if (keyParams == 'endDate'){
            values[1]= params[keyParams];
        }

        //adds the key as an alias to give a common column name to the return
        queryText += ` as ${keyParams}, `;
    })//end params loop

    //on the last on removes the space and comma
    //adds a colon
    queryText = queryText.slice(0, -2);
    queryText +=`;`
    console.log(queryText);
    return {queryText: queryText, values: values}
}

const test = {
  victim_ethnicity_asian: true,
};

console.log(makeCustomQuery(test, customReportObject));

module.exports = makeCustomQuery;