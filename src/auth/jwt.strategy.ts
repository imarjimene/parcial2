import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtConstants } from "./jwt.constants";

@Injectable()
export class JwtStratetegy extends PassportStrategy (Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretorKey:JwtConstants.secret
        });
    }
    async validateUser(payload:any){
        return{userId:payload.sub,ausername:payload.username }
    }


}