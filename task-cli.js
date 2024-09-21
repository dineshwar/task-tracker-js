#!/usr/bin/env node
const argv = process.argv;

if (argv.length <= 2) {
  console.log("Invalid no of arguments")
}

const action = argv[2];

switch (action) {
  case 'add':
    break;
  case 'mark-in-progress':
    break;
  case 'mark-done':
    break;
  case 'list':
    break;
  case 'update':
    break;
  case 'delete':
    break
  default:
    console.log("Invalid action")
}
