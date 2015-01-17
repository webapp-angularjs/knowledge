'use strict';

var requireDir = require('require-dir');
/**
 * Require all tasks in gulps/tasks, including subfolders
 */
requireDir('./gulps/tasks', { recurse: true });