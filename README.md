# Pre-rendering engine based on PhantomJS

Web crawlers like the Facebook crawler are not able to execute Javascript code and are only able to handle plain HTML.
This pre-rendering engine makes websites rendered by the client readable for those web crawlers.
It runs a NodeJS server listening for GET requests and spawns [PhantomJS](http://phantomjs.org/) as child process to 
evaluate all Javascript on the page. The whole DOM will be sent back as HTTP response.

## Usage

The project is available as docker image. 

Run it as follows: `docker run -p8080:8080 -d --name my-phantom-prerender ratzi199/phantom-prerender:latest`

Now the NodeJS server listens on port 8080 for incoming requests.
You can test the pre-rendering engine by doing `curl http://localhost:8080?url=<url-to-a-website>`

## Best practice for productive use

If you want to use the pre-rendering engine in your productive system, first run the docker container on your server of choice.
Then you have to configure your webserver to detect the crawlers you want to handle by their user agent and pass the request
on to the docker container for pre-rendering.