"use strict";
import {App } from './app';

/**
 * Start Server
 */
new App().server.listen(3000);
console.log('Hello world! From index.ts');
