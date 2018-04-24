import {sanitize} from "../../src/index";
import {Post} from "./Post";

// Sample5. boolean casting

let post1 = new Post();
post1.title = " Hello world ";
post1.text = "1. this is a great (2) post about hello 3 world.";
post1.isPublic = 0 as any;

sanitize(post1);
console.log(post1);
