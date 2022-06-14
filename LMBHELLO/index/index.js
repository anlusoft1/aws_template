const parse = async (event, context) => {

    console.log(event)
   
        return {
            "statusCode": 200,
            "body":JSON.stringify({"salida":"exito"}),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
                "X-Frame-Options": "SAMEORIGIN",
                "Referrer-Policy": "no-referrer-when-downgrade",
                "X-Content-Type-Options": "nosniff",
                "X-XSS-Protection": "1; mode=block"
            },
            "isBase64Encoded": false
          };  
};
exports.handler = parse;