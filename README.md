eb init --profile reactCodedeploy --platform node.js --region us-west-2

eb deploy

eb terminate


Using custom-env 

To use development database
NODE_ENV=development nodemon ./bin/www

To use staging database
NODE_ENV=staging nodemon ./bin/www

To use production database
NODE_ENV=production nodemon ./bin/www