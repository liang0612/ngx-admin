import { NgModule } from "@angular/core";
import { MessageService } from "./MessageService";
import { BaseMessage } from "./BaseMessage";
import { LoginMessage } from "./LoginMessage";
import { ResponseMessageInfo } from "./ResponseMessageInfo";

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [MessageService]
})
export class MessagesModule { }

export{
  MessageService,
  BaseMessage,
  ResponseMessageInfo,
  LoginMessage
}