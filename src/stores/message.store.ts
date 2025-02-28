import { makeAutoObservable } from "mobx"

export class MessageStore {
  static shared = new MessageStore()

  constructor() {
    makeAutoObservable(this)
  }

  currentMessage: string = ""
  messages: string[] = []

  sendMessage() {
    this.messages.push(this.currentMessage)
    this.currentMessage = ""
  }
}