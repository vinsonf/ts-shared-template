import express from "express";
import path from "path";
import { SHARED_CONST } from "../shared/constants.js";
const __dirname = path.resolve();

SHARED_CONST

const app = express();
const port = 8080; // default port to listen


// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.send( SHARED_CONST );
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );