import { __prod__ } from "./constant";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { psw, usr } from "/home/snorrealv/projects/React-GraphQL-TS-Stack/varconfig";


export default {
    migrations: {
        path: path.join(__dirname, './migrations'), 
        attern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: "fullstacktut",
    password: psw,
    user: usr,
    type: "postgresql",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];