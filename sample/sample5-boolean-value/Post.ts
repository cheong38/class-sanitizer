import { Trim, Rtrim, Blacklist, ToBoolean } from "../../src/index";

export class Post {

    @Trim()
    title: string;

    @Rtrim(["."])
    @Blacklist(/(1-9)/)
    text: string;

    @ToBoolean()
    isPublic: boolean;

}